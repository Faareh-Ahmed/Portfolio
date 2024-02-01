'use client'
import React, { useState } from 'react';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full text-foreground bg-background  sticky top-0 z-50">
            <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                <div className="p-4 flex flex-row items-center justify-between">
                    <a href="/" className="text-lg font-semibold tracking-widest text-foreground uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">
                        FAAREH AHMED
                    </a>
                    <button onClick={() => setOpen(!open)} className="md:hidden rounded-lg focus:outline-none focus:shadow-outline">
                        <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <nav className={`flex-col flex-grow pb-4 md:pb-0 ${open ? 'flex' : 'hidden'} md:flex md:justify-end md:flex-row`}>

                    <a className="px-4 py-2 mt-2 text-sm font-semibold text-foreground rounded-lg md:mt-0 hover:text-background  hover:bg-primary " href="/">ABOUT</a>
                    <a className="px-4 py-2 mt-2 text-sm font-semibold text-foreground rounded-lg md:mt-0 hover:text-background  hover:bg-primary " href="/">SKILLS</a>
                    <a className="px-4 py-2 mt-2 text-sm font-semibold text-foreground rounded-lg md:mt-0 hover:text-background  hover:bg-primary " href="/">PROJECTS</a>
                    <a className="px-4 py-2 mt-2 text-sm font-semibold text-foreground rounded-lg md:mt-0 hover:text-background  hover:bg-primary " href="/">CONTACT</a>
                </nav>
            </div>
        </div>
    );
};
