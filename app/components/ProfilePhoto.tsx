import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"

export default function ProfilePhoto({imageUrl, height=50, width=50}: {
    imageUrl: string,
    height: number,
    width: number
}){
    return <div className="cursor-pointer">
        <Avatar>
            <AvatarImage src={imageUrl} alt="@shadcn" width={width} height={height}/>
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    </div>
}