import { atom } from "recoil";
import { UserDetail } from "../util/interfaces/userDetailInterface";








export const selectedUserDetailState = atom({
    key:"selectedUserDetailState",
    default: {
        id:"",
        name:"",
        profileImage:"",
        headline:""
    } as UserDetail
})





