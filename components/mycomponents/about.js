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
            strings: ['Front End Developer', 'NextJS Developer', 'ReactJS Developer'],
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
            <div className="m-auto text-center lg:w-full bg-foreground">
                <h2 className="text-2xl text-background font-bold md:text-4xl py-4">About</h2>
            </div>
            <div className=" h-screen flex flex-col-reverse items-center  px-6  mx-auto   md:flex-row md:items-center md:space-x-6 bg-foreground">

                <div className="flex flex-col items-center w-full md:flex-row md:w-1/2 ">


                    <div className="max-w-lg mb-8 md:mx-12 md:order-2 ">
                        <h1 className="text-3xl py-8 font-extralight tracking-wide text-white dark:text-white md:text-4xl">
                            <span className="typed-element  text-background"></span>
                        </h1>
                        <p className="tracking-wide text-background text-2xl  md:text-2xl">I am Meta Certified Front-End-Developer currently pursuing Software Engineering from NUST SEECS</p>
                        <div className="mt-6">
                            <Button className='transition duration-300 ease-in-out bg-primary text-background  '>Download CV</Button>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center w-72 h-72 md:w-2/6 md:h-2/5  xl:w-2/6 xl:h-4/6 2xl:w-3/6 2xl:h-5/6">
                    <Image className="object-cover w-full h-full max-w-2xl rounded-full md:rounded-none" alt="apple watch photo" src={FaarehPic} />
                </div>
            </div>
        </>
    );
};
