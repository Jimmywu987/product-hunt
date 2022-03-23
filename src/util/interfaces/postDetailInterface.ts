import { UserDetail } from "./userDetailInterface";

interface Topic {
    node:{
        name: string;
    };
}

export interface PostDetail {
    slug:string;
    name:string;
    tagline:string;
    headline:string;
    createdAt: Date;
    topics:{
        edges: Topic[];
    };
    thumbnail:{
        url:string;
    };
    reviewsRating?: number;
    user?: UserDetail;
    url?:string
}