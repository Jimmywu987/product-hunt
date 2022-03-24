import React from 'react'
import Image from 'next/image';
import moment from 'moment';
import StarIcon from '@mui/icons-material/Star';
import { useDispatch } from 'react-redux';
import useTranslation from 'next-translate/useTranslation'
import { PostDetail } from '../../../util/interfaces/postDetailInterface';


function PostDetailSection({post,topicsList }:{post:PostDetail, topicsList: string[]}) {
    const dispatch = useDispatch();
    const { t } = useTranslation('common');

  return (
    <div className="p-2 lg:p-3 border border-blueGray-100 rounded-lg shadow-md flex flex-col justify-between ">
    <div className="flex flex-col lg:flex-row">
      <Image src={post.thumbnail.url} width={350} height={350} alt={`${post.name}-image`} className="object-contain "/>
      <div className="w-full lg:w-8/12 flex flex-col justify-between mx-1  mt-4 lg:mt-0">
        <div className="lg:px-3 h-full ">
            <div className="w-full h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between"><div className="text-theme-red text-3xl lg:text-4xl  font-bold leading-tight lg:mr-1">{post.name}</div>
                    {(post.reviewsRating || post.reviewsRating === 0) && <div className="flex items-center text-blueGray-700 self-start mr-2 lg:mr-1"><StarIcon className="text-yellow-500 mr-1"/>{post.reviewsRating}</div>}
                  </div>
                  {post.description && <div className="text-blueGray-600 my-3 lg:my-1">{post.description}</div>}
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {topicsList.map((topic, index)=><div className="text-xs px-2 py-1 rounded-full border border-blueGray-100 text-blueGray-700" key={`${topic}-${index}`}>{topic}</div>)}
                </div>
            </div>
        </div>
      </div>
    </div>
    <div className="mt-3 flex flex-col lg:flex-row justify-between">
    <div className="w-full lg:w-6/12 flex flex-col justify-between p-1 mb-3 lg:p-0 lg:mb-0">
      <div>
        <div className="text-blueGray-00 text-lg">{post.tagline}</div>
        <div className="text-blueGray-500">
            {moment(post.createdAt).format('L')}
        </div>
      </div>
      {post.url && <a href={post.url} target="_blank" className="text-sky-700 font-bold" rel="noreferrer">{t("postDetailPage.linkText")}</a>}
    </div>
    {post.user && 
      <div className="flex bg-white rounded-lg border lg:ml-2 shadow py-2 px-3 w-[340px]" onClick={()=>
          dispatch({
              type: "@@USER_DETAIL_SELECTED",
              payload: post,
          })}
      >
        <div className="p-1 justify-center items-center flex mr-1">
            <Image src={post.user.profileImage} width={100} height={100} alt={`${post.name}-image`} className="object-cover rounded-full"/>
        </div>
        <div className="py-5 px-1">
            <div className="text-blueGray-800 text-lg font-bold leading-tight">{post.user.name}</div>
            <div className="text-blueGray-600">{post.user.headline}</div>
        </div>
      </div>
    }
    </div>
    </div>
  )
}

export default PostDetailSection