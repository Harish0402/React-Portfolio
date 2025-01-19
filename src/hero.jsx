import React from "react";
import Heroimg from "./assets/hero.png";
import { FaGithub, FaFacebook  } from "react-icons/fa";

export default function Hero() {

    return(
        <div className=" flex flex-col md:flex-row px-5 py-28 justify-center items-center bg-hero" id="hero">
        <div className="md:w-1/2 justify-center text-white font-bold font-display">
            <h1 className="text-6xl">Hi, <br /> I'm Harish</h1>
            <p className="text-3xl">Full Stack Developer</p>
            <br />
            <div className="flex justify-evenly w-28">
                <a href="https://github.com/Harish0402"><FaGithub className="size-8" /></a>
                <a href="#"><FaFacebook className="size-8" /></a>
            </div>
        </div>

            <img src={Heroimg} alt="" className="p-10 md:w-1/4"/>
        </div>
    )
}