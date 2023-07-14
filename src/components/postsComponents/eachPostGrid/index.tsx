import React from "react";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { PostDetail } from "../../../util/interfaces/postDetailInterface";

const EachPostGrid = ({ post }: { post: PostDetail }) => {
  const dispatch = useDispatch();

  return (
    <Link
      href={`/post/${post.slug}`}
      passHref
      className="p-3 border border-blueGray-100 rounded-lg w-full shadow-md flex justify-between group cursor-pointer hover:bg-blueGray-50"
      onClick={() => {
        // turn the loading status to true
        dispatch({
          type: "@@LOADING_UPDATE",
          payload: true,
        });
      }}
    >
      <div className="flex items-center">
        <Image
          src={post.thumbnail.url}
          width={200}
          height={200}
          alt={`${post.name}-image`}
          className="object-contain "
        />
      </div>
      <div className="w-8/12 flex flex-col justify-between mx-1">
        <div className="px-3 h-full ">
          <div className="flex w-full justify-between h-full">
            <div className="flex flex-col space-y-2 h-full ">
              <div className="text-theme-red  2xl:text-xl  font-bold leading-tight">
                {post.name}
              </div>
              <div className="w-[140px] lg:w-[200px] text-blueGray-600 mb-1 lg:mb-0">
                {post.tagline}
              </div>
            </div>
            <div className="text-blueGray-500 text-xs">
              {moment(post.createdAt).format("L")}
            </div>
          </div>
        </div>

        <div
          className="flex bg-white rounded-lg border ml-2  shadow"
          onClick={() =>
            dispatch({
              type: "@@USER_DETAIL_SELECTED",
              payload: post,
            })
          }
        ></div>
      </div>
    </Link>
  );
};

export default EachPostGrid;
