import { PostType } from "@/models/Post";
import Image from "next/image";
import { Heart } from 'lucide-react';

export default function DisplayPost({post}: {
    post: PostType
}){
    return <div className="flex flex-col justify-between gap-4 border-b bg-gray-100 rounded-xl p-2">
        <div className="flex gap-2 items-center hover:bg-gray-200 w-4/12 p-2 rounded-lg">
            <Image src={post.user.profilePhoto || ""} width={28} height={28} alt="" className="rounded-full"/>
            <div className="flex flex-col">
                <p>{post.user.username}</p>
                <p className="text-sm text-gray-400"><i>{post.user.userId}</i></p>
            </div>
        </div>
        <div className="flex flex-col gap-4 px-8">
            <Image src={post.postImage || ""} alt="" width={400} height={400} className="w-full rounded-lg"/>
            <div className="">{post.content}</div>
        </div>
        <div className="felx jusitfy-between items-center px-2">
            <div><Heart/></div>
            <div></div>
        </div>
    </div>
}