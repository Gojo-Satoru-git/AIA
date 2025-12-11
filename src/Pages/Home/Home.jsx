import React from 'react';
import Hero from './Hero';
import Courses from './Courses';
import Top from './Top';
import OfficeBearers from './Officers';

export default function Home() {
  return (
    <div>
      <Top />
      <Hero />

      <section className="mt-16">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl text-green-900 text-center">
          AI Courses
        </h1>
        <p className="text-green-900 mt-4 sm:mt-6 md:mt-8 px-4 sm:px-8 md:px-20 lg:px-8 text-lg sm:text-2xl md:text-3xl lg:text-4xl lg:max-w-full sm:max-w-4xl mx-auto text-center">
          Explore our comprehensive curriculum designed to advance your
          artificial intelligence expertise
        </p>
        <Courses />
      </section>
      <div>
        <OfficeBearers />
      </div>
    </div>
  );
}
