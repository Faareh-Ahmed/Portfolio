'use client'
import Image from "next/image";
import Flags from "@/assets/Flags.jpg"
import MediCare from "@/assets/MediCare.jpg"
import LittleLemon2 from "@/assets/LittleLemon2.jpg"

export default function Projects() {


    return (
        <>
            <section className=" lg:pt-[12px] pb-10 lg:pb-20 bg-blue-500">
                <div className="pb-10 pt-10 m-auto text-center lg:w-7/12 bg-neutral-500">
                    <h2 className="text-2xl text-gray-700 font-bold md:text-4xl">PROJECTS</h2>
                </div>

                <div className="container bg-orange-300">
                    <div className="flex flex-wrap -mx-4 bg-red-400">
                        <div className="w-full md:w-1/2 xl:w-1/3 px-4 bg-yellow-500 mb-8">
                            <div className=" rounded-lg overflow-hidden mb-10 bg-slate-600 h-full transform hover:scale-105 transition-transform ">
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
                                    <a href="javascript:void(0)" className=" inline-block py-2 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color  font-medium hover:border-primary hover:bg-primary hover:text-white transition ">
                                        View Details
                                    </a>
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
                                    <a href="javascript:void(0)" className=" inline-block py-2 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white transition ">
                                        View Details
                                    </a>
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
                                    <a href="javascript:void(0)" className=" inline-block py-2 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white transition ">
                                        View Details
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
