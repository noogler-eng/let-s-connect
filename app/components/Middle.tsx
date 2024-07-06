import Post from "./Post"

export default function Middle({user}: any){
    return <div className="w-3/6 py-3 pr-3">
        <Post user={user}/>
    </div>
}