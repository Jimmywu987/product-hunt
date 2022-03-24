
import { PayloadAction } from "@reduxjs/toolkit";

import {  LOADING_UPDATE } from "../../actions/loadingStatusActions"
import { ILoadingStatusType } from "../../types/loadingStatusType"



const initialPostDetailState:ILoadingStatusType = {
        status: false
}

export const loadingStatusReducer = (state:ILoadingStatusType = initialPostDetailState, actions: PayloadAction<any>)=>{
    switch (actions.type) {
        case LOADING_UPDATE:
          state.status = actions.payload;
          return { ...state };
        default:
          return { ...state };
      }
}
