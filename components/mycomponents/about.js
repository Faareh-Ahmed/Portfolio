'use client'
import Image from "next/image";
import FaarehPic from '@/assets/faarehpic.jpg';
import { Button } from "../ui/button";
import React, { useEffect } from 'react';
import Typed from 'typed.js';


export default function About() {

    useEffect(() => {
        // Define options for the typing animation
        const options = {
            strings: ['Front End Developer', 'NextJS Developer', 'React Developer'],
            typeSpeed: 40,
            loop: true,
            loopCount: Infinity,

        };

        // Create a new Typed instance
        const typed = new Typed('.typed-element', options);

        // Clean up the Typed instance on component unmount
        return () => {
            typed.destroy();
        };
    }, []); // Empty dependency array ensures the effect runs only once on mount


    return (
        <>
            <div className=" h-screen flex flex-col-reverse items-center  px-6  mx-auto space-y-6  md:flex-row md:items-center md:space-x-6 bg-gray-800">
                <div className="flex flex-col items-center w-full md:flex-row md:w-1/2 ">


                    <div className="max-w-lg md:mx-12 md:order-2 ">
                        <h1 className="text-3xl py-8 font-extralight tracking-wide text-white dark:text-white md:text-4xl">
                            <span className="typed-element bg-slate-100 text-black"></span>
                        </h1>
                        <p className="tracking-wide text-white text-2xl dark:text-white md:text-2xl">I am Meta Certified Front-End Developer currently pursuing Software Engineering from NUST SEECS</p>
                        <div className="mt-6">
                            <Button className='transition duration-300 ease-in-out bg-black text-white hover:bg-white hover:text-black'>Download CV</Button>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center w-72 h-72 md:w-2/6 md:h-4/6 ">
                    <Image className="object-cover w-full h-full max-w-2xl rounded-full" alt="apple watch photo" src={FaarehPic} />
                </div>
            </div>
        </>
    );
};
