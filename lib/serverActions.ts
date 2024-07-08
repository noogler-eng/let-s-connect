"use server"
import { Post } from "@/models/Post";
import { currentUser } from "@clerk/nextjs/server";
import { v2 as cloudinary } from 'cloudinary';
import DBConnect from "./dbConnect";


export const createPostAction = async(content: string, imageUrl: string)=>{
    const user = await currentUser()
    if(!user) throw new Error("user not authenticated")
    if(!content) throw new Error("input field is required")
    await DBConnect();
    try{

        cloudinary.config({ 
            cloud_name: process.env.CLOUD_NAME, 
            api_key: process.env.CLOUD_API_KEY, 
            api_secret: process.env.CLOUD_API_SECRET
        });

        const uploadResult = await cloudinary.uploader.upload(imageUrl)
        .catch((error) => {
            console.log(error);
        });

        await Post.create({
            content: content,
            postImage: uploadResult?.secure_url || "",
            user: {
                username: user.username,
                profilePhoto: user?.imageUrl || "",
                UserId: user.id
            }
        })
    }catch(error: any){
        console.log(error);
        throw new Error(error);
    }
}

export async function getPostAction(){
    await DBConnect();
    try{
        const posts = await Post.find({});
        return (JSON.stringify(posts));
    }catch(error: any){
        console.log(error);
        throw new Error(error);
    }
}

// it gives post 200 in response