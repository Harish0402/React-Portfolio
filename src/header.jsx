import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function Header() {
    const[toggleMenu, setToggleMenu] = useState(false);

    return(
        
        <header className='flex justify-between px-5 py-3 bg-header' >
            <div>
                 <a href="#" className='font-bold'>HARISH K</a>
            </div>
           
           <nav className='hidden md:block'> 
                <ul className='flex'>
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#tech">Tech</a></li>
                    <li><a href="#project">Project</a></li>
                    <li><a href="#service">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
           </nav>
           
            
            {toggleMenu &&  
            <nav className='block md:hidden '> 
                <ul className='flex flex-col mobile-nav'>
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#tech">Tech</a></li>
                    <li><a href="#project">Project</a></li>
                    <li><a href="#service">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            }

           <button onClick={()=> setToggleMenu(!toggleMenu)} className='block md:hidden'> <Bars3Icon className="size-7 text-white" /> </button>

        </header>
    )
}