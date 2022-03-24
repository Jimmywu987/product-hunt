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




const PostDetailPage = ({post}) => {
    const dispatch = useDispatch();
    const { t } = useTranslation('common');

  const postInfo = useSelector((state: IRootState) => state.selectedPostDetailReducer.postDetail)
  const posts = useSelector((state: IRootState) => state.storedPostsReducer.posts)


    useEffect(()=>{
        if(posts.length === 0){
            fetchPostsFromProductHunt()
        }
    },[])

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
    const displayPost:PostDetail = postInfo.name !== "" ? postInfo : post
    const topicsList:string[] = displayPost.topics ? displayPost.topics.edges.map(topic => topic.node.name) : []
    const topicFilterPosts = posts.filter((post)=> post.topics.edges.some((topic)=>topicsList.includes(topic.node.name)) && post.name !== displayPost.name)

  return (
    <div className="container mx-auto px-1 lg:px-4 my-14 flex flex-col lg:flex-row lg:justify-between">
        <div className="w-full lg:w-7/12 lg:mr-3 mb-6 lg:mb-0">
          <Link href="/" passHref><a className="inline-flex items-center text-blueGray-400 mb-4"><ArrowBackIosIcon className="text-sm " />{t("homepage.backButton")}</a></Link>
          <PostDetailSection post={post} topicsList={topicsList} />
        </div>
        <div className="w-full lg:w-5/12">
          <RelatedTopicsSection displayPost={displayPost} posts={posts} topicFilterPosts={topicFilterPosts}/>
        </div>
    </div>
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
    console.log("post detail data",data)

    if(!data || error){
     if(mockData[`${params.slug}`]){
       return {
         props: {
           post:  mockData[`${params.slug}`].data.post,
         }
       }
     }
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
      if(mockData[`${params.slug}`]){
        return {
          props: {
            post:  mockData[`${params.slug}`].data.post,
          }
        }
      }
       return {
          notFound: true,
        };
    }
}
