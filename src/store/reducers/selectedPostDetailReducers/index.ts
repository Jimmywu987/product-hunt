
import { PayloadAction } from "@reduxjs/toolkit";

import {  POST_DETAIL_SELECTED } from "../../actions/selectedPostDetailActions"
import { ISelectedPostDetailType } from "../../types/selectedPostDetailType"



const initialPostDetailState:ISelectedPostDetailType = {
        postDetail: {
            slug:"",
            name:"",
            tagline:"",
            headline:"",
            createdAt: new Date(),
            topics:{
                edges: []
            },
            thumbnail:{
                url:""
            },
            user: {
                id:"",
                name:"",
                profileImage:"",
                headline:""
            }
        }
}

export const selectedPostDetailReducer = (state:ISelectedPostDetailType = initialPostDetailState, actions: PayloadAction<any>)=>{
    switch (actions.type) {
        case POST_DETAIL_SELECTED:
          state.postDetail = actions.payload;
          return { ...state };
        default:
          return { ...state };
      }
}
