import { useEffect } from 'react'
import { useRouter } from "next/router";
import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import { useRecoilState, useRecoilValue } from 'recoil';
import { selectedPostDetailState } from '../../atoms/selectedPostDetail';
import { storePostsState } from '../../atoms/storePosts';
import { GetServerSideProps } from 'next';
import RelatedPostsSection from '../../components/postDetailPageComponents/relatedPosts';


const PostDetailPage = ({post}) => {
    console.log("post123",post)
    const router = useRouter()
    const postInfo = useRecoilValue(selectedPostDetailState)
    const [posts, setPosts] = useRecoilState(storePostsState)
    useEffect(()=>{
        if(posts.length === 0){
            console.log("checking")
            fetchPostsFromProductHunt()
        }
    },[])

    const fetchPostsFromProductHunt = async () => {
        const resultJSON = await fetch('/api/post-fetching')
        if(resultJSON.status === 200){
            const {posts} = await resultJSON.json()
            setPosts(posts)
        }
    }
    console.log("post",post)
    console.log("postInfo",postInfo)
  return (
    <div className="container mx-auto my-14 flex">
        <div className="w-full md:w-7/12"></div>
        <div className="w-full md:w-5/12">
            <RelatedPostsSection
                relatedTopics={postInfo.name ? postInfo.topics.edges : post.name? post.topics.edges : []}
                posts={posts}
                selectedPostName={postInfo.name ? postInfo.name : post.name? post.name: ""}
            />
        </div>
    </div>
  )
}

export default PostDetailPage

const ob = {
    "post": {
      "name": "RADAAR",
      "createdAt": "2022-03-23T07:01:00Z",
      "tagline": "Not just another scheduling tool",
      "topics": {
        "edges": [
          {
            "node": {
              "name": "Social Media Tools"
            }
          },
          {
            "node": {
              "name": "Social media marketing"
            }
          }
        ]
      },
      "thumbnail": {
        "url": "https://ph-files.imgix.net/ab60213a-f638-4d9d-a45a-8e76790d1503.gif?auto=format"
      },
      "user": {
        "id": "3117947",
        "name": "Mustafa Ercan Zırh",
        "profileImage": "https://ph-avatars.imgix.net/3117947/862e163b-1766-4f19-b00f-6a23065aa4b6?auto=format&fit=crop&crop=faces&w=original&h=original",
        "headline": "Founder & CEO, RADAAR | Hiring 🚀"
      },
      "description": "Managing multiple social media profiles can get overwhelming, but it doesn't have to be that way. Now you can simplify your social media management with RADAAR. It helps everyone at every step, from scheduling and publishing posts to analyzing their efforts.",
      "url": "https://www.producthunt.com/posts/radaar?utm_campaign=producthunt-api&utm_medium=api-v2&utm_source=Application%3A+PH+API+Explorer+%28ID%3A+9162%29",
      "reviewsRating": 4.91
    }
  }
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
        // const {data, error} = await client.query({
        //   query: gql`
        //     query   {
        //            post(slug: "${params.slug}"){
        //               name,
        //               createdAt,
        //               tagline,
        //               topics {
        //                 edges {
        //                   node {
        //                     name,
        //                   }
        //                 }
        //               },
        //               thumbnail {
        //                 url
        //               },
        //               user{
        //                 id,
        //                 name,
        //                 profileImage,
        //                 headline
        //               }
        //              description,
        //              url,
        //              reviewsRating,
        //            }
        //          }
        //   `
        // })


        if(true){
    
          return {
            props: {
              post: ob.post
            }
          }
        }

        // return {
        //   props: {
        //     post: data.post,
        //   }
        // }
    
      }catch(err){
        if(err){
          return {
            props: {
              post: {},
            }
          }
        }
      }
}
