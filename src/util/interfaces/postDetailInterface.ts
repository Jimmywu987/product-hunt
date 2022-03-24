

interface Topic {
    node:{
        name: string;
    };
}
interface UserDetail {
    id:string;
    name:string;
    profileImage:string;
    headline:string;
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
    description?:string;
}