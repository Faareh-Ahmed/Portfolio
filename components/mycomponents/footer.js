'use client'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"



export default function Footer() {


    return (
        <>
            <footer className="bg-gradient-to-r bg-white">
                <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        <div>
                            <p className="max-w-xs mt-4 text-sm text-gray-600">
                                Follow Me on these Platforms
                            </p>
                            <div className="flex mt-8 space-x-6 text-gray-600">

                                <Avatar>
                                    <AvatarImage src='/img/github.png' />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>


                                <Avatar>
                                    <AvatarImage src='/img/Linkedin.png' />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>

                                <Avatar>
                                    <AvatarImage src='/img/leetcode.png' />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>

                                <Avatar>
                                    <AvatarImage src='/img/insta.png' />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>

                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
                            <div>
                                <p className=" font-semibold">
                                    Links
                                </p>
                                <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                    <a className="hover:opacity-75" href> About </a>
                                    <a className="hover:opacity-75" href> Skills</a>
                                    <a className="hover:opacity-75" href> Projects </a>
                                    <a className="hover:opacity-75" href> Contact </a>
                                </nav>
                            </div>
                            <div>
                                <p className=" font-semibold">
                                    Services
                                </p>
                                <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                    <a className="hover:opacity-75" > Front End Development </a>
                                    <a className="hover:opacity-75" > REACTJS Developer </a>
                                    <a className="hover:opacity-75" > NEXTJS Developer </a>
                                    <a className="hover:opacity-75" > MERN Developer </a>
                                    <a className="hover:opacity-75" > Online Tutoring </a>
                                </nav>
                            </div>
                            
                           
                        </div>
                    </div>
                    <p className="mt-8 text-xs text-gray-800">
                        © FAAREH AHMED
                    </p>
                </div>
            </footer>
        </>
    );
};
