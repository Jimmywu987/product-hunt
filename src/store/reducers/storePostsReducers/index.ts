
import { PayloadAction } from "@reduxjs/toolkit";
import { STORED_POSTS } from "../../actions/storePostsActions";
import { ISelectedStoredPostsType } from "../../types/storedPostsType"



const initialStoredPostState:ISelectedStoredPostsType = {
        posts: [],
        topics: []
}

export const storedPostsReducer = (state:ISelectedStoredPostsType = initialStoredPostState, actions: PayloadAction<any>)=>{
    switch (actions.type) {
        case STORED_POSTS:
          state.posts = actions.payload.posts;
          state.topics = actions.payload.topics
          return { ...state };
        default:
          return { ...state };
      }
}
