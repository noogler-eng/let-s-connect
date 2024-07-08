'use client'
import { useEffect, useState } from "react";
import Post from "./Post"
import DisplayPost from "./DsiplayPost";
import { PostType } from "@/models/Post";
import { getPostAction } from "@/lib/serverActions";

export default function Middle({user}: any){
    
    const [posts, setPosts] = useState([]);

    async function getAllThePost(){
        const res = await getPostAction();
        const resInJSON = JSON.parse(res);
        setPosts(resInJSON);
    }

    useEffect(()=>{
        getAllThePost();
    }, [])

    const postArray = posts.map((post:PostType, index:any)=>{
        return <DisplayPost post={post} key={index}/>
    })

    // passing the object from server to client in a plain object
    const userData = JSON.parse(JSON.stringify(user));
    
    return <div className="w-3/6 py-3 pr-3">
        <Post user={userData}/>
        <div className="border-2 p-3 rounded-lg mt-3">
            {postArray}
        </div>
    </div>
}