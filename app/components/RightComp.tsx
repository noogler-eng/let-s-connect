import ProfilePhoto from "./ProfilePhoto";

export default async function RightComp({ user }: any){

    return <div className="w-3/12 p-3">
        <div className="flex flex-col items-center justify-center gap-2 pb-3 border-b-2">
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full p-3 flex justify-center rounded-lg min-h-16 relative">
                <div className="absolute top-10">
                    {user && <ProfilePhoto imageUrl={user?.imageUrl} width={80} height={80}/>}
                </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-3">
                {user && <div>{user.username}</div>}
                {user && <div className="text-sm text-gray-400">{user.emailAddresses[0].emailAddress}</div> }
            </div>
        </div>
    </div>
}