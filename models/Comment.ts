import mongoose, { Model } from "mongoose";
import { IUserDocument } from "./User";

export type CommentType = {
    contentId: string;
    content: string;
    user: IUserDocument
}

export interface ICommentDocument extends CommentType, Document{
    createdAt: Date,
    UpdatedAt: Date
}

const CommentSchema = new mongoose.Schema<ICommentDocument>({
    contentId: {
        type: String,
        require: true
    },
    content: {
        type: String,
        required: true,
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
    }
}, {timestamps: true});

// model of type IUserDocuemnt
export const Comment: Model<ICommentDocument> = mongoose.models.Comment || mongoose.model<ICommentDocument>('Comment', CommentSchema);
