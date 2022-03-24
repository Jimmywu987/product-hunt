
import { Action } from '@reduxjs/toolkit';
import { combineReducers, createStore } from 'redux';
import { storedPostsReducer } from './reducers/storePostsReducers';
import { ISelectedStoredPostsType } from './types/storedPostsType';
import { ILoadingStatusType } from './types/loadingStatusType';
import { loadingStatusReducer } from './reducers/loadingStatusReducers';




export interface IRootState{
    storedPostsReducer: ISelectedStoredPostsType
    loadingStatusReducer: ILoadingStatusType

}


const rootReducer = combineReducers<IRootState>({
  loadingStatusReducer,
  storedPostsReducer
});



export default createStore<IRootState,Action<any>,{},{}>(rootReducer)