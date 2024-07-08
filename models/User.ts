import mongoose, { Model } from "mongoose";

export type UserType = {
    userId: string;
    profilePhoto?: string;
    username: string;
    email: string;
    bio?: string;
}

export interface IUserDocument extends UserType, Document{
    createdAt: Date,
    UpdatedAt: Date
}

const UserSchema = new mongoose.Schema<IUserDocument>({
    userId: {
        type: String,
        required: true,
    },
    profilePhoto: {
        type: String,
        default: ""
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
        default: "nothinh for now!"
    },
}, {timestamps: true});

// model of type IUserDocuemnt
export const User: Model<IUserDocument> = mongoose.models.User || mongoose.model<IUserDocument>('User', UserSchema);
