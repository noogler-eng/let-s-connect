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
import { readFileAsDataUrl } from "@/lib/utils"
import Image from "next/image"


export function PostDialog({children, imageUrl, isOpen, setIsOpen, username}: {
    children: React.ReactNode,
    imageUrl: string,
    isOpen: any,
    setIsOpen: any,
    username: string
}) {

  const [content, setContent] = useState("");
  const [selectedFile, setSelectedFile] = useState<string>("");


  const handelPost = ()=>{
    console.log(content);
    

    setContent("");
    setIsOpen(false);
  }

  const handelFile =async(e: React.ChangeEvent<HTMLInputElement>)=>{
    const imageFile = e.target.files?.[0];
    
    if(imageFile){
      const data_url = await readFileAsDataUrl(imageFile);
      setSelectedFile(data_url);
    }
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
            <Input id="picture" type="file" onChange={(e)=>{
              handelFile(e)
            }}/>
          </div>
          {selectedFile && <Image src={selectedFile} alt="preview-image" width={400} height={400} className="rounded-xl"/>}
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handelPost}>Make It Public</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
