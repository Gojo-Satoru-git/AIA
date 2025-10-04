import React from "react";
import Hero from "./Hero";
import Courses from "./Courses";


export default function Home(){
    return(
        <>
        <section className="p-8 text-center">
        <h1 className="font-bold pl-8 text-8xl flex mt-16 text-green-900 justify-center">Welcome to Artificial Intelligence Association </h1>
        <p className="text-green-900 pl-52 pr-24 max-w-8xl text-4xl mt-6">Join a vibrant community of AI enthusiasts, researchers, and innovators dedicated to advancing the frontiers of artificial intelligence</p>
        </section>

         <Hero />

         <h1 className="font-bold pl-8 text-6xl flex mt-16 text-green-900 justify-center">AI Courses</h1>
        <p className="text-green-900 pl-52 pr-30 flex items-center  max-w-8xl text-4xl mt-8">Explore our comprehensive curriculum designed to advance your artificial intelligence expertise</p>
        <Courses />
         
         </>

    );
}