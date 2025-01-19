import React from 'react';
import Header from './header';
import Hero from './hero';
import Tech from './tech';
import Project from './project';
import Service from './service';
import Contact from './contact';
import Footer from './footer';
import './App.css';

function App(){
  return(
    <>
    <Header />
    <Hero/>
    <Tech/>
    <Project/>
    <Service/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App;