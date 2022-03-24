
import { Action } from '@reduxjs/toolkit';
import { combineReducers, createStore } from 'redux';
import { selectedPostDetailReducer } from './reducers/selectedPostDetailReducers';
import { storedPostsReducer } from './reducers/storePostsReducers';
import { ISelectedPostDetailType } from './types/selectedPostDetailType';
import { ISelectedStoredPostsType } from './types/storedPostsType';
import { ILoadingStatusType } from './types/loadingStatusType';
import { loadingStatusReducer } from './reducers/loadingStatusReducers';




export interface IRootState{
  selectedPostDetailReducer: ISelectedPostDetailType
    storedPostsReducer: ISelectedStoredPostsType
    loadingStatusReducer: ILoadingStatusType

}


const rootReducer = combineReducers<IRootState>({
  selectedPostDetailReducer,
  loadingStatusReducer,
  storedPostsReducer
});



export default createStore<IRootState,Action<any>,{},{}>(rootReducer)