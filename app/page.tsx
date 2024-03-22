import Image from "next/image";
import { LampDemo } from "./home";
import Navbar from "./navbar";
import About from "./about";
import { LayoutGridDemo } from "./gallery";
import { AnimatedPinDemo } from "./maps";
import Feedback from "./feedback";
import Contact from "./contact";

export default function Home() {
  return (
     <>
        <Navbar/>

        <LampDemo/>

        <About/>

        <LayoutGridDemo/>

        <AnimatedPinDemo/>

        <Feedback/>

        <Contact/>
     </>
  );
}
