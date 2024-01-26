'use client'
import Image from "next/image";
import Flags from "@/assets/Flags.jpg"
import MediCare from "@/assets/MediCare.jpg"
import LittleLemon2 from "@/assets/LittleLemon2.jpg"
import { Button } from "../ui/button";

export default function Projects() {


    return (
        <>
            <section className=" lg:pt-[12px] pb-10 lg:pb-20 bg-foreground">
                <div className="pb-10 pt-10 m-auto text-center lg:w-7/12 ">
                    <h2 className="text-2xl text-background font-bold md:text-4xl">PROJECTS</h2>
                </div>

                <div className="container">
                    <div className="flex flex-wrap -mx-4 ">
                        <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-8">
                            <div className=" rounded-lg overflow-hidden mb-10 bg-background h-full transform hover:scale-105 transition-transform ">
                                <Image
                                    src={Flags}
                                    alt="image"
                                    className="w-full h-1/3"
                                />
                                <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                                    <h3>
                                        <a href="javascript:void(0)" className="font-semibold text-dark text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] mb-4 block hover:text-primary " >
                                            The Flags
                                        </a>
                                    </h3>
                                    <p className="text-base text-body-color leading-relaxed mb-7">
                                        Discover the world with 'The Flags,' a ReactJS web app. Immerse yourself in diverse country details powered by a RESTful API and Axios. Explore demographics, languages, and currencies in real time. Tailor your journey using region filters and search options                                    </p>
                                    <Button href="javascript:void(0)" className=" inline-block py-2 px-7 border border-ring rounded-full text-background bg-primary  font-medium  transition ">
                                        View on GitHub
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-8">
                            <div className="bg-white rounded-lg overflow-hidden mb-10 h-full transform hover:scale-105 transition-transform ">
                                <Image
                                    src={MediCare}
                                    alt="image"
                                    className="w-full h-1/3"
                                />
                                <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                                    <h3>
                                        <a href="javascript:void(0)" className=" font-semibold text-dark text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] mb-4  block hover:text-primary">
                                            MediCare
                                        </a>
                                    </h3>
                                    <p className="text-base text-body-color leading-relaxed mb-7">
                                        Developed a comprehensive Hospital Management System leveraging the MERN Stack. This system is designed to streamline and simplify hospital operations, focusing on efficient staff management, seamless patient registration, and appointment scheduling.                                    </p>
                                    <Button href="javascript:void(0)" className=" inline-block py-2 px-7 border border-ring rounded-full text-background bg-primary  font-medium  transition ">
                                        View on GitHub
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-8">
                            <div className="bg-white rounded-lg overflow-hidden mb-10 h-full transform hover:scale-105 transition-transform ">
                                <Image
                                    src={LittleLemon2}
                                    alt="image"
                                    className="w-full h-1/3"
                                />
                                <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                                    <h3>
                                        <a href="javascript:void(0)" className="  font-semibold  text-dark text-xl  sm:text-[22px]  md:text-xl  lg:text-[22px]  xl:text-xl  2xl:text-[22px]  mb-4  block  hover:text-primary  ">
                                            Little Lemon Restaurant
                                        </a>
                                    </h3>
                                    <p className="text-base text-body-color leading-relaxed mb-7">
                                        Developed an engaging and interactive front end for a restaurant website using React. This project showcases my proficiency in creating dynamic and visually appealing user interfaces, providing a seamless and delightful user experience.                                    </p>
                                    <Button href="javascript:void(0)" className=" inline-block py-2 px-7 border border-ring rounded-full text-background bg-primary  font-medium  transition ">
                                        View on GitHub
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
