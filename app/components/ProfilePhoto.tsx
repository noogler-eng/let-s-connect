import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"

export default function ProfilePhoto({imageUrl, height, width}: {
    imageUrl: string,
    height: number,
    width: number
}){

    return <div className="cursor-pointer">
        <Avatar>
            <AvatarImage src={imageUrl} alt="@shadcn"/>
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    </div>
}