'use client'
import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll/modules'
export default function Navbar() {
    const [open, setOpen] = useState(false);

    const scrollToTop = () => {
        scroll.scrollToTop();
      };
    return (
        <div className="w-full text-foreground bg-background  sticky top-0 z-50">
            <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                <div className="p-4 flex flex-row items-center justify-between">
                    <Link onClick={scrollToTop} className="text-lg font-semibold tracking-widest text-foreground uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline hover:cursor-pointer">
                        FAAREH AHMED
                    </Link>
                    <button onClick={() => setOpen(!open)} className="md:hidden rounded-lg focus:outline-none focus:shadow-outline">
                        <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <nav className={`flex-col flex-grow pb-4 md:pb-0 ${open ? 'flex' : 'hidden'} md:flex md:justify-end md:flex-row`}>

                    <Link activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        className="px-4 py-2 mt-2 text-sm font-semibold text-foreground rounded-lg md:mt-0 hover:text-background  hover:bg-primary  hover:cursor-pointer "
                    >ABOUT
                    </Link>

                    <Link activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        className="px-4 py-2 mt-2 text-sm font-semibold text-foreground rounded-lg md:mt-0 hover:text-background  hover:bg-primary  hover:cursor-pointer"
                    >SKILLS
                    </Link>

                    <Link activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        className="px-4 py-2 mt-2 text-sm font-semibold text-foreground rounded-lg md:mt-0 hover:text-background  hover:bg-primary hover:cursor-pointer "
                    >PROJECTS
                    </Link>

                    <Link activeClass="active"
                        to="contacts"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        className="px-4 py-2 mt-2 text-sm font-semibold text-foreground rounded-lg md:mt-0 hover:text-background  hover:bg-primary  hover:cursor-pointer"
                    >CONTACT
                    </Link>

                </nav>
            </div>
        </div>
    );
};
