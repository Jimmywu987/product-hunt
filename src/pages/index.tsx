import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import Router from "next/router";
import PostCollection from "../components/homepageComponents/postCollection";
import TopicFilter from "../components/homepageComponents/topicFilter";
import { useState, useEffect } from "react"
import { PostDetail } from "../util/interfaces/postDetailInterface";
import FilterListIcon from '@mui/icons-material/FilterList';
import useTranslation from "next-translate/useTranslation";
import { GetStaticProps } from "next";
import { useDispatch } from "react-redux";
import mockData from "../util/mockData/homepageData.json"



 const HomePage = ({posts, topics}:{posts:PostDetail[],topics:string[]})=>{
  const dispatch = useDispatch();
  const { t } = useTranslation('common');
  const [topicFilter, setTopicFilter] = useState<string[]>([])
  const [showFilter, setShowFilter] = useState<boolean>(false);



  useEffect(()=>{
    dispatch({
      type: "@@STORED_POSTS",
      payload: {posts,topics},
    });
  },[])

  const showFilterOnMobile = () => {
    setShowFilter((e:boolean) => !e);
  };
  const toRefreshPage = () => {
      Router.reload();
  }
  if(posts.length === 0){
    return <div className="flex justify-center items-center text-2xl h-[80vh] cursor-pointer" onClick={toRefreshPage}>
      {t("homepage.noPostMessage")} :(
    </div>
  }
  return (
    <div className="container mx-auto px-1 lg:px-4 my-14">
      <div className="mb-4 flex justify-end">
      <div
        className="inline-flex flex-row items-center px-3 py-2 text-sm border rounded-lg cursor-pointer border-blue-DEE7F3 text-blue-596F8D lg:hidden"
        onClick={showFilterOnMobile}>
          <FilterListIcon />
          <span className="ml-3">{t("homepage.filterTitle")}</span>
        {topicFilter.length > 0 && <span className="text-theme-red self-end ml-2">{topicFilter.length}</span>}
      </div>
      </div>
      <div className="flex">
        <div className={`${showFilter ? 'hidden' : 'block'} w-full lg:w-9/12 lg:block`}>
          <PostCollection topicFilter={topicFilter} posts={posts}/>
        </div>
        <div className={`${showFilter ? 'block' : 'hidden'} w-full lg:w-3/12 lg:block`}>
          <TopicFilter topics={topics} setTopicFilter={setTopicFilter} topicFilter={topicFilter}/>
        </div>
      </div>
    </div>
  )
}

export default HomePage



export  const getStaticProps: GetStaticProps = async ()=>{
  const client = new ApolloClient({
    uri: "https://api.producthunt.com/v2/api/graphql",
    cache: new InMemoryCache(),
    headers: {
      "Host": "api.producthunt.com",
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.NEXT_PUBLIC_PH_ACCESS_TOKEN}`
    }
  });
  const topics:string[] = []
  try{

    const {data, error} = await client.query({
      query: gql`
        query {
            posts {
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
   console.log("data",data)
    if(!data || error){
      const allTopicsWithinArray = mockData.map((eachNode)=> eachNode.node.topics.edges.map((topic)=>topic.node.name))
      allTopicsWithinArray.map((each)=>{
        each.map(topic=>{
          if(!topics.includes(topic)){
            topics.push(topic)
          }
        })
      })
      return {
        props: {
          posts: mockData.map(post=>post.node),
          topics: topics
        },
        revalidate: 60 * 20
      }
    }
    //  Here to get array of string topics for user to filter through the post conveniently
    
    const allTopicsWithinArray = data.posts.edges.map((eachNode)=> eachNode.node.topics.edges.map((topic)=>topic.node.name))
    allTopicsWithinArray.map((each)=>{
      each.map(topic=>{
        if(!topics.includes(topic)){
          topics.push(topic)
        }
      })
    })

    return {
      props: {
        posts: data.posts.edges.map(post=>post.node),
        topics: topics
      },
      revalidate: 60 * 20
    }

  }catch(err){
    const allTopicsWithinArray = mockData.map((eachNode)=> eachNode.node.topics.edges.map((topic)=>topic.node.name))
    allTopicsWithinArray.map((each)=>{
      each.map(topic=>{
        if(!topics.includes(topic)){
          topics.push(topic)
        }
      })
    })
    return {
      props: {
        posts: mockData.map(post=>post.node),
        topics: topics
      },
      revalidate: 60 * 20
    }
  }
  
  
}



