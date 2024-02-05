'use client'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import Work from '@/public/lotties/opentowork.json'
import Lottie from 'lottie-react'
export default function Contact() {


    return (
        <>
        <section id="contacts">
            <div className="m-auto text-center lg:w-full bg-foreground">
                <h2 className="text-2xl text-background font-bold md:text-4xl">CONTACT ME</h2>
            </div>
            <div className="flex  p-12 bg-foreground">

                <div className="w-full max-w-[550px] ">
                    <form>

                        <div className="mb-5">
                            <label htmlFor="email" className="mb-3 block text-base font-medium text-background">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                placeholder="example@domain.com"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="subject" className="mb-3 block text-base font-medium text-background">
                                Subject
                            </label>
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                autoComplete="subject"
                                placeholder="Enter your subject"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="message" className="mb-3 block text-base font-medium text-background">
                                Message
                            </label>
                            <textarea
                                rows="4"
                                name="message"
                                id="message"
                                autoComplete="message"
                                placeholder="Type your message"
                                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            ></textarea>
                        </div>
                        <div>
                            <Button className="hover:shadow-form rounded-md bg-primary py-3 px-8 text-base font-semibold text-background outline-none ">
                                Submit
                            </Button>
                        </div>


                    </form>
                </div>
                {/* <div className=" bg-slate-400 ml-16">
                    <Lottie animationData={Work}/>
                </div> */}
            </div>
            </section>
        </>
    );
};
