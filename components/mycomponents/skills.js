'use client'
import Image from "next/image";
import Reactjs from '@/assets/reactjs.png'
import Directus from '@/assets/Directus.png'
import Git from '@/assets/Git.png'
import Cpp from '@/assets/Cpp.png'
import Mysql from '@/assets/Mysql.png'
import Nextjs from '@/assets/Nextjs.png'
import Nodejs from '@/assets/Nodejs.png'
import Python from '@/assets/Python.png'
import Tailwind from '@/assets/Tailwind.png'

export default function Skills() {


    return (
        <>
            <div className="py-16 bg-foreground">
                <div className="container m-auto px-6 space-y-8 md:px-12 lg:px-56">
                    <div className="m-auto text-center lg:w-7/12">
                        <h2 className="text-2xl text-background font-bold md:text-4xl">SKILLS</h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                        <div className="p-4">
                            <Image src={Reactjs} className="w-32" alt="React" />
                        </div>
                        <div className="p-4">
                            <Image src={Nextjs} className="w-24" alt="" />
                        </div>
                        
                        <div className="p-4">
                            <Image src={Directus} className=" w-52" alt="" />
                        </div>
                        <div className="p-4">
                            <Image src={Nodejs} className="w-32 " alt="" />
                        </div>
                        <div className="p-4">
                            <Image src={Python} className="w-24" alt="" />
                        </div>
                        <div className="p-4">
                            <Image src={Cpp} className="w-24" alt="" />
                        </div>
                        <div className="p-4">
                            <Image src={Mysql} className="w-32" alt="" />
                        </div>
                        <div className="p-4">
                            <Image src={Git} className="w-32" alt="" />
                        </div>
                        <div className="p-4">
                            <Image src={Tailwind} className="w-52" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
