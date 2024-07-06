import Post from "./Post"

export default function Middle({user}: any){
    
    // passing the object from server to client in a plain object
    const userData = JSON.parse(JSON.stringify(user));
    
    return <div className="w-3/6 py-3 pr-3">
        <Post user={userData}/>
    </div>
}