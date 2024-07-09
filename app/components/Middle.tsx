import Post from "./Post"
import { getPostAction } from "@/lib/serverActions";
import FormPostArray from "./FormPostArray";

export default async function Middle({user}: any){
    
    const posts = await getPostAction();

    // passing the object from server to client in a plain object
    const userData = JSON.parse(JSON.stringify(user));
    
    return <div className="w-3/6 py-3 pr-3">
        <Post user={userData}/>
        <FormPostArray posts={posts} user={userData}/>
    </div>
}