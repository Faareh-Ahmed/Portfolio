'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Link } from 'react-scroll/modules'
import Image from "next/image"
import Email from '@/assets/email.png'
import Github from '@/assets/github.png'
import Insta from '@/assets/insta.png'
import Leetcode from '@/assets/leetcode.png'
import Linkedin from '@/assets/Linkedin.png'

export default function Footer() {


    return (
        <>
            <footer className="bg-gradient-to-r bg-background">
                <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        <div>
                            <p className="max-w-xs mt-4 text-sm text-foreground">
                                Follow Me on these Platforms
                            </p>
                            <div className="flex mt-8 space-x-6 text-foreground">

                                <a href="mailto:faarehahmed@email.com" target="_blank" rel="noopener noreferrer">
                                    <Avatar className='hover:scale-105'>
                                        {Email && <Image src={Email} alt='Email'  />}
                                        {!Email && <AvatarFallback>Email</AvatarFallback>}
                                    </Avatar>
                                </a>

                                <a href="https://github.com/Faareh-Ahmed" target="_blank" rel="noopener noreferrer">
                                    <Avatar className='hover:scale-105'>
                                    {Github && <Image src={Github} alt='Github'  />}
                                        {!Github && <AvatarFallback>Github</AvatarFallback>}
                                    </Avatar>
                                </a>

                                <a href="https://www.linkedin.com/in/faareh-ahmed/" target="_blank" rel="noopener noreferrer">
                                    <Avatar className='hover:scale-105'>
                                    {Linkedin && <Image src={Linkedin} alt='Linkedin'  />}
                                        {!Linkedin && <AvatarFallback>Linkedin</AvatarFallback>}
                                    </Avatar>
                                </a>

                                <a href="https://leetcode.com/faareh_ahmed/" target="_blank" rel="noopener noreferrer">
                                    <Avatar className='hover:scale-105'>
                                    {Leetcode && <Image src={Leetcode} alt='Leetcode'  />}
                                        {!Leetcode && <AvatarFallback>Leetcode</AvatarFallback>}
                                    </Avatar>
                                </a>

                                <a href="https://www.instagram.com/faareh_a6/" target="_blank" rel="noopener noreferrer">
                                    <Avatar className='hover:scale-105'>
                                    {Insta && <Image src={Insta} alt='Insta'  />}
                                        {!Insta && <AvatarFallback>Insta</AvatarFallback>}
                                    </Avatar>
                                </a>

                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
                            <div>
                                <p className=" font-semibold">
                                    Links
                                </p>
                                <nav className="flex flex-col mt-4 space-y-2 text-sm text-foreground">

                                    <Link activeClass="active"
                                        to="about"
                                        spy={true}
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className="hover:opacity-75 hover:cursor-pointer"
                                    >About
                                    </Link>

                                    <Link activeClass="skills"
                                        to="contacts"
                                        spy={true}
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className="hover:opacity-75  hover:cursor-pointer"
                                    > Skills
                                    </Link>

                                    <Link activeClass="active"
                                        to="projects"
                                        spy={true}
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className="hover:opacity-75 hover:cursor-pointer"
                                    > Projects
                                    </Link>

                                    <Link activeClass="active"
                                        to="contacts"
                                        spy={true}
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className="hover:opacity-75 hover:cursor-pointer"
                                    > Contact
                                    </Link>
                                </nav>
                            </div>
                            <div>
                                <p className=" font-semibold">
                                    Services
                                </p>
                                <nav className="flex flex-col mt-4 space-y-2 text-sm text-foreground">
                                    <a className="hover:opacity-75" > Front End Development </a>
                                    <a className="hover:opacity-75" > REACTJS Developer </a>
                                    <a className="hover:opacity-75" > NEXTJS Developer </a>
                                    <a className="hover:opacity-75" > MERN Developer </a>
                                    <a className="hover:opacity-75" > Online Tutoring </a>
                                </nav>
                            </div>


                        </div>
                    </div>
                    <p className="mt-8 text-xs text-foreground font-semibold">
                        © FAAREH AHMED
                    </p>
                </div>
            </footer>
        </>
    );
};
