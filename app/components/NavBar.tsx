'use client'
import Link from "next/link"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { House } from "lucide-react"
import { Network } from 'lucide-react';
import { LampDesk } from 'lucide-react';
import { SignInButton, UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button"




export default function NavBar(){

    const [search, setsearch] = useState("");
    const { isLoaded, isSignedIn, user } = useUser();


    const navitems: {
        icon: any,
        href: string,
        name: string
    }[] = [
        {
            icon: <House size={22}/>,
            href: '/',
            name: 'Home'
        },
        {
            icon: <Network size={22}/>,
            href: '/networks',
            name: 'My-Networks'
        },
        {
            icon: <LampDesk size={22}/>,
            href: '/job',
            name: 'Jobs'
        }
    ]


    return <div className="p-4 px-8 fixed w-full z-50 shadow-lg shadow-gray-500/50 bg-white">
        <div className="flex w-full justify-between items-center">
            <div className="flex gap-7 items-center">
                <div className="text-lg md:text-3xl font-semibold"><Link href='/'><i>let's Connect</i></Link></div>
                <div>
                    <Input placeholder="search" className="max-h-8 rounded-sm outline-none border-none text-black bg-[#D8EBFB]"/>
                </div>
            </div>
            <div className="flex gap-5 items-center">
                { navitems.map((item, index)=>{
                    return <div className="hidden md:block flex flex-col items-center justify-center cursor-pointer" key={index}>
                        <Link href={item.href} className="flex flex-col items-center"> 
                            <span className="">{item.icon}</span>
                            <p className="text-gray-400 text-sm hover:text-black">{item.name}</p>
                        </Link>
                    </div>
                })}
                {isLoaded ? isSignedIn ? <Button className="rounded-full flex justify-center items-center p-2 bg-[#D8EBFB]"><UserButton/></Button>:<Button variant="ghost" className="outline"><SignInButton/></Button> : "..." }
            </div>
        </div>
    </div>
}