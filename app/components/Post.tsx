import ProfilePhoto from "./ProfilePhoto";


export default function Post({user}: any){
    return <div className="p-3 border-2 border-gray rounded-lg flex-1 flex flex-col gap-3">
        <div className="flex items-center gap-3">
            { user && <ProfilePhoto imageUrl={user.imageUrl} width={50} height={50}/> }
            <input type="text" placeholder="start a post" className="outline-none rounded-lg border p-2 w-full"/>
        </div>
        <div className="flex justify-between">
            <button>1</button>
            <button>2</button>
            <button>3</button>
        </div>
        <button></button>
    </div>
}