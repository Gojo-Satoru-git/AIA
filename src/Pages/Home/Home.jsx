import React from "react";
import Hero from "./Hero";
import Courses from "./Courses";

export default function Home() {
  return (
    <>
      <section className="p-6 sm:p-8 md:p-10 text-center">
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-10 sm:mt-12 md:mt-16 text-green-900">
          Welcome to Artificial Intelligence Association
        </h1>
        <p className="text-green-900 mt-4 sm:mt-6 md:mt-6 px-4 sm:px-8 md:px-8 lg:px-52 text-lg sm:text-2xl md:text-3xl lg:text-4xl md:max-w-2xl lg:max-w-full sm:max-w-4xl mx-auto">
          Join a vibrant community of AI enthusiasts, researchers, and innovators dedicated to advancing the frontiers of artificial intelligence
        </p>
      </section>

      <Hero />

      <section className="mt-16">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl text-green-900 text-center">
          AI Courses
        </h1>
        <p className="text-green-900 mt-4 sm:mt-6 md:mt-8 px-4 sm:px-8 md:px-20 lg:px-8 text-lg sm:text-2xl md:text-3xl lg:text-4xl lg:max-w-full sm:max-w-4xl mx-auto text-center">
          Explore our comprehensive curriculum designed to advance your artificial intelligence expertise
        </p>
        <Courses />
      </section>
    </>
  );
}
