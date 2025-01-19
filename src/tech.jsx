import React from "react";
import Html from './assets/html-photoroom (1).png';
import css from './assets/css-Photoroom.png';
import js from './assets/js-Photoroom (1).png';
import sass from './assets/sass-Photoroom.png';
import bootstrap from './assets/bootstrap-Photoroom (1).png';
import react from './assets/react-Photoroom (1).png';

export default function Tech() {
    return(
        <section className="flex flex-col text-center px-5 py-20 bg-tech" id="tech">
            <h1 className="text-white text-3xl font-display font-bold ">Technologies Learned</h1><br />

            <div className="flex justify-evenly flex-wrap">
                <img src={Html} alt="" className="size-44"/>
                <img src={css} alt="" className="size-44"/>
                <img src={js} alt="" className="size-44"/>
                <img src={sass} alt="" className="size-44 w-56"/>
                <img src={bootstrap} alt="" className="size-44"/>
                <img src={react} alt="" className="size-44"/>
            </div>
        </section>
    )
}