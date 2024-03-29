'use client'
import Image from "next/image";
import FaarehPic from '@/assets/faarehpic.jpg';
import { Button } from "../ui/button";
import React, { useEffect } from 'react';
import Typed from 'typed.js';
import { saveAs } from 'file-saver';
// import { Document, Page, pdfjs } from 'react-pdf';
// import saveAs from 'file-saver';
// import {Document, Page, pdfjs} from 'react-pdf'

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


    const downloadCV = async () => {
        try {
            // Fetch the PDF file 
            const response = await fetch('/Faareh_Ahmed_resume.pdf');
            const blob = await response.blob();

            // Use FileSaver to save the blob as a file
            saveAs(blob, 'Faareh_Ahmed_resume.pdf');
        } catch (error) {
            console.error('Error downloading CV:', error);
        }
    };

    return (
        <>
            <section id="about">
                <div className="m-auto text-center lg:w-full bg-foreground">
                    <h2 className="text-2xl text-background font-bold md:text-4xl py-4">About</h2>
                </div>
                <div className=" h-fit md:h-screen flex flex-col-reverse items-center  px-6  mx-auto   md:flex-row md:items-center md:space-x-6 bg-foreground">

                    <div className="flex flex-col items-center w-full md:flex-row md:w-1/2 ">


                        <div className="max-w-lg mb-8 md:mx-12 md:order-2 ">
                            <h1 className="text-3xl py-8 font-extralight tracking-wide text-white dark:text-white md:text-4xl">
                                <span className="typed-element  text-background"></span>
                            </h1>
                            <p className="tracking-wide text-background text-2xl  md:text-2xl">Student of Software Engineering from SEECS NUST. Enthusiastic developer with a fervent passion for solving real-world problems. I am committed to staying abreast of the latest advancements in the field, ensuring that my skill set is always at the forefront of innovation.
                            </p>
                            <div className="mt-6 flex justify-center items-center">
                                <Button className='transition duration-300 ease-in-out bg-primary text-background w-32' onClick={downloadCV} >Download RESUME</Button>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-72 h-72 md:w-2/6 md:h-2/5  xl:w-2/6 xl:h-4/6 2xl:w-3/6 2xl:h-5/6">
                        <Image className="object-cover w-full h-full max-w-xl  rounded-full md:rounded-none" alt="apple watch photo" src={FaarehPic} />
                    </div>
                </div>
            </section>
        </>
    );
};
