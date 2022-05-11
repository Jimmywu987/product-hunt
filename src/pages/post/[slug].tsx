import { useEffect } from 'react'
import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import { GetServerSideProps } from 'next';
import Link from "next/link";
import RelatedTopicsSection from '../../components/postDetailPageComponents/relatedTopicsSection';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../store';
import PostDetailSection from '../../components/postDetailPageComponents/postDetail';
import mockData from "../../util/mockData/pageDetailData.json"
import useTranslation from 'next-translate/useTranslation';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { PostDetail } from '../../util/interfaces/postDetailInterface';
import Head from 'next/head';




const PostDetailPage = ({post}:{post:PostDetail}) => {
    const dispatch = useDispatch();
    const { t } = useTranslation('common');
    const posts = useSelector((state: IRootState) => state.storedPostsReducer.posts)


    // useEffect(()=>{
    //     // in the case of directly get to this [slug] page through browser url, then a new array of posts need to be fetched again for listing out a related posts on right hand side
    //     if(posts.length === 0){
    //         fetchPostsFromProductHunt()
    //     }
    // },[])

    useEffect(()=>{
      // set the loading state back to false when finished the data fetching
      dispatch({
          type: "@@LOADING_UPDATE",
          payload: false,
      })    
    },[post])

    const fetchPostsFromProductHunt = async () => {
        const resultJSON = await fetch('/api/post-fetching')
        if(resultJSON.status === 200){
            const {posts, topics} = await resultJSON.json()
            dispatch({
              type: "@@STORED_POSTS",
              payload: {posts,topics}
            });
        }
    }

    // here to get a list of topics that related to the selected post for filter
    const topicsList:string[] = post.topics ? post.topics.edges.map(topic => topic.node.name) : []
    const topicFilterPosts = posts.filter((eachPost)=> eachPost.topics.edges.some((topic)=>topicsList.includes(topic.node.name)) && eachPost.name !== post.name)

  return (
    <>
    <Head>
        <meta name="title" content={`${post.name} | Product Hunt`} />
        <meta name="description" content={post.description} />
    </Head>
    <div className="container mx-auto px-1 lg:px-4 my-14 flex flex-col lg:flex-row lg:justify-between">
        <div className="w-full lg:w-7/12 lg:mr-3 mb-6 lg:mb-0">
          <Link href="/" passHref><a className="inline-flex items-center text-blueGray-400 mb-4"><ArrowBackIosIcon className="text-sm " />{t("homepage.backButton")}</a></Link>
          <PostDetailSection post={post} topicsList={topicsList} />
        </div>
        <div className="w-full lg:w-5/12">
          <RelatedTopicsSection displayPost={post} posts={posts} topicFilterPosts={topicFilterPosts}/>
        </div>
    </div>
    </>
  )
}

export default PostDetailPage

export const getServerSideProps: GetServerSideProps = async ({params})=>{

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
    try{

    
    const {data, error} = await client.query({
      query: gql`
        query   {
               post(slug: "${params.slug}"){
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
                 description,
                 url,
                 reviewsRating,
               }
             }
      `
    })
    
// If graphql failed to fetch due to the requested data over the limited that allowed, then mock data will be in used
    if(!data || error){
     if(mockData[`${params.slug}`]){
       return {
         props: {
           post:  mockData[`${params.slug}`].data.post,
         }
       }
     }
      // If the slug could be found in mock data, then user will be redirected to 404 page
      return {
         notFound: true,
       };
    }
     return {
       props: {
         post: data.post,
       }
     }
    }catch(err){

    
      // If error occurred, then mock data will be in used
      if(mockData[`${params.slug}`]){
        return {
          props: {
            post:  mockData[`${params.slug}`].data.post,
          }
        }
      }
      // If the slug could be found in mock data, then user will be redirected to 404 page
       return {
          notFound: true,
        };
    }
}
