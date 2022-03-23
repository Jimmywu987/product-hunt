import React from 'react'
import EachPostGrid from '../../postsComponents/eachPostGrid';
import useTranslation from 'next-translate/useTranslation';

const PostCollection = ({posts,topicFilter})=>{

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:px-3">
        {posts.length > 0 && posts.filter((post)=>{
            if(topicFilter.length === 0) return true
           return post.topics.edges.some((topic)=>topicFilter.includes(topic.node.name))
        }).map(post=><EachPostGrid key={post.slug} post={post} />)}
    </div>
  )
}

export default PostCollection


