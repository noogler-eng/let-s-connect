import { PostType } from "@/models/Post"
import DisplayPost from "./DsiplayPost"


export default function FormPostArray({posts, user}: {
    posts: any, 
    user: any
}){
    
    const postArray = posts.length > 0 && posts.map((post:PostType, index:any)=>{
        return <DisplayPost post={post} key={index} user={user}/>
    })

    return <div className="border-2 p-3 rounded-lg mt-3 flex flex-col gap-3">
        {postArray}
    </div>
}