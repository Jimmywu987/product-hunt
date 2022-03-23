import React from 'react'
import { useRouter } from "next/router";
import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import { useRecoilState } from 'recoil';
import { selectedUserDetailState } from '../../atoms/selectedUserDetail';
import { GetServerSideProps } from 'next';


const UserDetailPage = () => {
    const router = useRouter()
    const [userInfo, setUserInfo] = useRecoilState(selectedUserDetailState)
  return (
    <div>UserDetailPage</div>
  )
}

export default UserDetailPage


export const getServerSideProps: GetServerSideProps = async({params})=>{
    console.log("params",params)

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
        //     query   {76
        //            post(id: ${params.id}){
        //             name,
        //             profileImage,
        //             headline
        //             createdAt,
        //             coverImage,
        //             url
        //            }
        //          }
        //   `
        // })
        if(true){
    
          return {
            props: {
              user: {}
            }
          }
        }

        // return {
        //   props: {
        //     post: data.user,
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
