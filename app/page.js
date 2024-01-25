'use client'
import Navbar from "@/components/mycomponents/navbar";
import About from "@/components/mycomponents/about";
import Skills from "@/components/mycomponents/skills";
import Projects from "@/components/mycomponents/projects";
import Contact from "@/components/mycomponents/contact";
import Footer from "@/components/mycomponents/footer";

// Rest of your code
export default function Home() {
  return (
    <>
    <Navbar/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  );
}
