import mongoose, { Model } from "mongoose";
import { IUserDocument } from "./User";
import { Comment, CommentType } from "./Comment";

export type PostType = {
    content: string;
    postImage?: string;
    user: IUserDocument;
    likes?: string[];
    comments?: CommentType[];
}

export interface IPostDocument extends PostType, Document{
    createdAt: Date,
    UpdatedAt: Date
}

const PostSchema = new mongoose.Schema<IPostDocument>({
    content: {
        type: String,
        default: ""
    },
    postImage: {
        type: String,
        default: ""
    },
    user: {
        UserId: {
            type: String,
            required: true
        },
        profilePhoto: {
            type: String,
            default: ""
        },
        username: {
            type: String,
            required: true
        }
    },
    likes: {
        type: [String]
    },
    comments: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Comment
    }
    
}, {timestamps: true});

// model of type IUserDocuemnt
export const Post: Model<IPostDocument> = mongoose.models.Post || mongoose.model<IPostDocument>('Post', PostSchema);
