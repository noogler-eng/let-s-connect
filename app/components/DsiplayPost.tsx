'use client'
import Image from "next/image";
import { Badge } from "@/components/ui/badge"
import { Heart } from 'lucide-react';
import { CopyX } from 'lucide-react';
import { deletePostAction } from "@/lib/serverActions";


export default function DisplayPost({post, user}: {
    post: any
    user: any
}){

    const handelDelete = async()=>{
        await deletePostAction(post?._id);
    }

    function getTime(){
        const postDate: any = new Date(post.createdAt.toString());
        const currentDate: any = new Date();
        const timeDifference = currentDate - postDate;

        // convert milisecond -> second -> minute
        const minutes = Math.floor(timeDifference / (1000 * 60));
        // convert milisecond -> second -> minute -> hours
        const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    
        let timeString;
        if (hours > 0) {
            timeString = `${hours} hour${hours > 1 ? 's' : ''} ago`;
        } else {
            timeString = `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
        }
        return timeString;
    }

    return <div className="flex flex-col justify-between gap-4 border-b bg-gray-100 rounded-xl p-2">
        <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center hover:bg-gray-200 min-w-4/12 p-2 rounded-lg">
                <Image src={post.user.profilePhoto || ""} width={28} height={28} alt="" className="rounded-full"/>
                <div className="flex flex-col">
                    <div className="font-semibold">{post.user.username} {post.user.username == user?.username ?<Badge className="text-gray-400 hover:bg-black hover:text-white" variant={'outline'}>you</Badge>: null}</div>
                    <p className="text-sm text-gray-400"><i>{post.user?.UserId}</i></p>
                    <p className="text-sm">{getTime()}</p>
                </div>
            </div>
            <div className="">
                { (post.user.username == user?.username) && <CopyX onClick={handelDelete} className="" size={25}/>}
            </div>
        </div>
        <div className="flex flex-col gap-4 px-8">
            {post.postImage && <Image src={post.postImage || ""} alt="" width={400} height={400} className="w-full rounded-lg"/>}
            <div className="">{post.content}</div>
        </div>
        <div className="flex justify-between items-center px-2">
            <div><Heart/></div>
            <div>{new Date(post.createdAt.toString()).toDateString().toString()}</div>
        </div>
    </div>
}