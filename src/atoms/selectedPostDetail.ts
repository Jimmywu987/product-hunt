import { atom } from "recoil";
import { PostDetail } from "../util/interfaces/postDetailInterface";

export const selectedPostDetailState = atom({
    key:"selectedPostDetailState",
    default: {
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
    } as PostDetail
})