import React from 'react'
import EachPostGrid from '../../postsComponents/eachPostGrid'

const RelatedPostsSection = ({posts, relatedTopics,selectedPostName}) => {
    const topicFilter = relatedTopics.map(topic => topic.node.name)
    console.log("posts",posts)
    console.log("relatedTopics",relatedTopics)
    console.log("selectedPostName",selectedPostName)
  return (
    <div className="w-full grid grid-cols-1 gap-6 lg:px-3">
        {
            posts && posts.length > 0 &&posts.filter((post)=>{
                return post.topics.edges.some((topic)=>topicFilter.includes(topic.node.name)) && post.name !== selectedPostName
             }).slice(0,3).map(post=><EachPostGrid key={post.slug} post={post} />)
        }
    </div>
  )
}

export default RelatedPostsSection