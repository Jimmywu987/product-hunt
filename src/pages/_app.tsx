import '../../styles/globals.css'
import Layout from "../components/globalComponents/layout"
import { Provider } from 'react-redux';
import store from "../store";
import {
  ApolloClient,
  InMemoryCache,
  gql
} from "@apollo/client";
import mockData from "../util/mockData/homepageData.json"
import { AppProps } from 'next/app';



const MyApp = ({ Component, pageProps, posts,topics })=>{

  return ( 
    <Provider store={store}>
      <Layout posts={posts} topics={topics} >
        <Component {...pageProps} posts={posts} topics={topics}/>
      </Layout>
    </Provider>
  )
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  const client = new ApolloClient({
    uri: "https://api.producthunt.com/v2/api/graphql",
    cache: new InMemoryCache(),
    headers: {
      "Host": "api.producthunt.com",
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.PH_ACCESS_TOKEN}`
    }
  });
  const topics:string[] = []
  try{

    const {data, error} = await client.query({
      query: gql`
        query {
            posts (first:20) {
              edges {
                node {
                  slug,
                  name,
                  createdAt,
                  tagline,
                  topics {
                    edges {
                      node {
                        name,
                      }
                    }
                  },
                  thumbnail {
                    url
                  },
                  user{
                    id,
                    name,
                    profileImage,
                    headline
                  }
                }
              }
            }
      }
      `
    })

    // If graphql failed to fetch due to the requested data over the limited that allowed, then mock data will be in used
    if(!data || error){
      const allTopicsWithinArray:string[][] = mockData.map((eachNode)=> eachNode.node.topics.edges.map((topic)=>topic.node.name))
      allTopicsWithinArray.map((each)=>{
        each.map(topic=>{
          if(!topics.includes(topic)){
            topics.push(topic)
          }
        })
      })
      return { pageProps,  posts: mockData.map(post=>post.node), topics: topics }
    }


    //  Here to get array of string topics for user to filter through the post conveniently
    const allTopicsWithinArray:string[][] = data.posts.edges.map((eachNode)=> eachNode.node.topics.edges.map((topic)=>topic.node.name))
    allTopicsWithinArray.map((each)=>{
      each.map(topic=>{
        if(!topics.includes(topic)){
          topics.push(topic)
        }
      })
    })

    return {
      pageProps,
      posts: data.posts.edges.map(post=>post.node),
      topics: topics
    }

  }catch(err){
    // here using the mock data as well
    const allTopicsWithinArray:string[][] = mockData.map((eachNode)=> eachNode.node.topics.edges.map((topic)=>topic.node.name))
    allTopicsWithinArray.map((each)=>{
      each.map(topic=>{
        if(!topics.includes(topic)){
          topics.push(topic)
        }
      })
    })
    return  {
      pageProps,
      posts: mockData.map(post=>post.node),
      topics: topics
    }
  }
};


export default MyApp
