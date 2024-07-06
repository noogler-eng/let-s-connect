'use client'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import ProfilePhoto from "./ProfilePhoto"


export function PostDialog({children, imageUrl, isOpen, setIsOpen, username}: {
    children: React.ReactNode,
    imageUrl: string,
    isOpen: any,
    setIsOpen: any,
    username: string
}) {

  const [content, setContent] = useState("");
  const [img, setImg] = useState("");


  const handelPost = ()=>{
    console.log(content);
    console.log(img);
    

    setContent("");
    setImg("");
    setIsOpen(false);
  }

  return (
    <Dialog open={isOpen} onOpenChange={()=>setIsOpen(!isOpen)}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]" onInteractOutside={()=>setIsOpen(false)}>
        <DialogHeader>
          <div className="flex flex-row gap-3 hover:bg-gray-200 rounded-lg w-1/2 p-2">
            <ProfilePhoto imageUrl={imageUrl} height={50} width={50}/>
            <div className="flex flex-col">
              <p className="font-semibold">{username}</p>
              <p className="text-sm text-gray-400"><i>post to anyone</i></p>
            </div>
          </div>
          <div>
            <DialogTitle>lets post it..</DialogTitle>
            <DialogDescription>
              Make yout post here.
            </DialogDescription>
          </div>
        </DialogHeader>
        <div className="w-full py-4 flex flex-col gap-4">
          <div>
            <Textarea placeholder="Type your message here." value={content} onChange={(e)=>{
              setContent(e.target.value);
            }}/>
          </div>
          <div>
            <Input id="picture" type="file" value={img} onChange={(e)=>{
              setImg(e.target.value)
            }}/>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handelPost}>Make It Public</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
