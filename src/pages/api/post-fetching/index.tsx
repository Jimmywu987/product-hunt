import {
    ApolloClient,
    InMemoryCache,
    gql
} from "@apollo/client";
import mockData from "../../../util/mockData/homepageData.json"
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    if (req.method === "GET") {
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
        const topics: string[] = []
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
        //  Here to get array of string topics for user to filter through the post conveniently
          const allTopicsWithinArray = mockData.map((eachNode)=> eachNode.node.topics.edges.map((topic)=>topic.node.name))
          allTopicsWithinArray.map((each)=>{
            each.map(topic=>{
              if(!topics.includes(topic)){
                topics.push(topic)
              }
            })
          })
          return res.status(200).json({ posts: mockData.map(post=>post.node), topics});
        
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
          return res.status(200).json({ posts: data.posts.edges.map(post=>post.node), topics});
      }catch(err){

        //when error occurred, then mock data will be in used
        const allTopicsWithinArray = mockData.map((eachNode)=> eachNode.node.topics.edges.map((topic)=>topic.node.name))
        allTopicsWithinArray.map((each)=>{
          each.map(topic=>{
            if(!topics.includes(topic)){
              topics.push(topic)
            }
          })
        })
        return res.status(200).json({ posts: mockData.map(post=>post.node), topics});
      }
   } 
 }