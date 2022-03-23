import { atom } from "recoil";
import { PostDetail } from "../util/interfaces/postDetailInterface";






export const storePostsState = atom({
    key:"storePostsState",
    default: [] as PostDetail[]
})
