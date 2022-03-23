import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from "next/link";
import { useSetRecoilState } from 'recoil';selectedPostDetailState
import { selectedUserDetailState } from '../../../atoms/selectedUserDetail';
import { selectedPostDetailState } from '../../../atoms/selectedPostDetail';

const EachPostGrid = ({post})=>{
    const setSelectedPostDetail = useSetRecoilState(selectedPostDetailState)
    const setSelectedUserDetail = useSetRecoilState(selectedUserDetailState)

  return (
        <div className="p-3 border border-blueGray-100 rounded-lg w-full shadow-md flex justify-between group">

            <Link href={`/post/${post.slug}`} passHref>
                <a onClick={()=>setSelectedPostDetail(post)}>
                    <Image src={post.thumbnail.url} width={200} height={200} alt={`${post.name}-image`} className="object-contain cursor-pointer"/>
                </a>
            </Link>
            <div className="w-8/12 flex flex-col justify-between mx-1">
                <Link href={`/user/${post.slug}`} passHref>
                    <a className="px-3 h-full cursor-pointer" onClick={()=>setSelectedPostDetail(post)}>
                        <div className="flex w-full justify-between h-full">
                            <div className="flex flex-col justify-between h-full ">
                                <div className="text-theme-red text-lg font-bold leading-tight">{post.name}</div>
                                <div className="truncate w-[140px] lg:w-[200px] text-blueGray-600">{post.tagline}</div>
                            </div>
                            <div className="text-blueGray-500 text-xs">
                                {moment(post.createdAt).format('L')}
                            </div>
                        </div>
                    </a>
                </Link>

                <Link href={`/user/${post.user.id}`} passHref>
                    <a className="flex bg-white rounded-lg border ml-2 cursor-pointer hover:bg-blueGray-100 shadow" onClick={()=>setSelectedUserDetail(post.user)}>
                        <div className="p-1 w-4/12 justify-center items-center flex">
                            <Image src={post.user.profileImage} width={70} height={70} alt={`${post.name}-image`} className="object-cover rounded-full"/>
                        </div>
                        <div className="w-8/12 py-5 px-1">
                            <div className="text-blueGray-800 text-lg font-bold leading-tight">{post.user.name}</div>
                            <div className="truncate w-[140px] lg:w-[160px] text-blueGray-600">{post.user.headline}</div>
                        </div>
                    </a>
                </Link>
            </div>

        </div>
  )
}

export default EachPostGrid