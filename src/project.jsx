import React from "react";
import news from './assets/neewspaper.png';
import ai from './assets/AI.png';
import ki from './assets/calc.png';


export default function Project() {
    return(
        <section className="flex flex-col px-5 py-20 text-center bg-project"> 
            <h2 className="text-white text-3xl font-bold font-display text-center">Projects</h2>
            <br />

            <div className="flex flex-wrap justify-evenly">
                <div class="relative group w-80 h-72 rounded-lg overflow-hidden">
                    <img src={news} alt="Image" class="w-full h-full object-cover"/>
                    <div class="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <a href="https://harish0402.github.io/newspaper-layout/" class="text-white text-lg font-semibold" target="blank">Visit Page</a>
                    </div>
                </div>

                <div class="relative group w-80 h-72 rounded-lg overflow-hidden">
                    <img src={ai} alt="Image" class="w-full h-full object-cover"/>
                    <div class="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <a href="https://harish0402.github.io/AI/" class="text-white text-lg font-semibold" target="blank">Visit Page</a>
                    </div>
                </div>

                <div class="relative group w-80 h-72 rounded-lg overflow-hidden">
                    <img src={ki} alt="Image" class="w-full h-full object-cover"/>
                    <div class="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <a href="https://harish0402.github.io/Calculator/" class="text-white text-lg font-semibold" target="blank">Visit Page</a>
                    </div>
                </div>
             </div>
                     
        </section>
    )
}