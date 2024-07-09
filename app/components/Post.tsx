'use client'
import { useState } from "react";
import { PostDialog } from "./PostDailog";
import ProfilePhoto from "./ProfilePhoto";


export default function Post({user}: any){
    
    const [isOpen, setIsOpen] = useState(false);
    
    return <div className="p-3 border-2 border-gray rounded-lg flex-1 flex flex-col gap-3">
        <div className="flex items-center gap-3">
            { user && <ProfilePhoto imageUrl={user?.imageUrl} width={50} height={50}/> }
            { user && <PostDialog imageUrl={user.imageUrl} isOpen={isOpen} setIsOpen={setIsOpen} username={user.username}>
                <input type="text" placeholder="start a post" className="outline-none rounded-lg border p-2 w-full" onClick={()=>{
                    setIsOpen(true);
                }}/>
            </PostDialog> }
        </div>
    </div>
}