import React from "react";
import { Nav } from "./nav";
import { ProfileImage } from "../base/profile-image";

export const Hero: React.FC = () => (
  <section className="bg-gray-100">
    <Nav />
    <div className="container">
      <div className="flex flex-col items-center my-16">
        <ProfileImage />
        <h1 className="text-5xl font-bold m-4">Hey,  I'm Alec Campbell</h1>
        <p className="text-2xl text-gray-600 text-center">
         “The Internet is the first thing that humanity has built, 
        </p>
        <p className="text-2xl text-gray-600 text-center">
          that humanity doesn't understand,
        </p>  
        <p className="text-2xl text-gray-600 text-center">
          the largest experiment in anarchy that we have ever had.” 
        </p>                                
        <p className="text-xl text-gray-500 text-right m-4">             
          ― Eric Schmidt
        </p>
        <div className="grid grid-cols-6 gap-4 auto-cols-auto max-w-3xl md:mx-auto p-6 justify-content: center">
          <a
            className="grow mx-1 md:mx-2 py-1 px-2 rounded bg-blue-200 hover:bg-blue-300 text-blue-800"
            data-splitbee-event="Open Twitter"
            href="https://twitter.com/VaLandscapes"
          >
            Twitter
          </a>
          <a
            className="grow mx-1 md:mx-2 py-1 px-2 rounded bg-rose-400 hover:bg-rose-500 text-rose-800 justify-content: center"
            href="https://dev.to/uvacoder"
          >
            Dev.to
          </a>
          <a
            className="grow mx-1 md:mx-2 py-1 px-2 rounded bg-fuchsia-300 hover:bg-fuchsia-400 text-fuchsia-800"
            data-splitbee-event="Open LinkedIn"
            href="https://linkedin.com/en/alecbcampbell"
          >
            LinkedIn
          </a>
          <a
            className="mx-1 md:mx-2 py-1 px-2 rounded bg-cyan-400 hover:bg-cyan-400 text-cyan-800"
            data-splitbee-event="Open GitHub"
            href="https://github.com/uvacoder"
          >
            GitHub
          </a>
          <a
            className="mx-1 md:mx-2 py-1 px-2 rounded bg-pink-200 hover:bg-pink-300 text-pink-800"
            data-splitbee-event="Open Dribbble"
            href="https://dribbble.com/uvacoder"
          >
            Dribbble
          </a>
          <a
            className="mx-1 md:mx-2 py-1 px-2 rounded bg-emerald-200 hover:bg-emerald-300 text-emerald-800"
            href="https://codepen.io/uvacoder"
          >
            Codepen
          </a>
          <a
            className="mx-1 md:mx-2 py-1 px-2 rounded bg-violet-400 hover:bg-violet-500 text-violet-800"
            href="https://hashnode.dev/uvacoder"
          >
            Hashnode
          </a>
          <a
            className="mx-1 md:mx-2 py-1 px-2 rounded bg-teal-400 hover:bg-teal-500 text-teal-800"
            href="https://www.polywork.com/uvacoder"
          >
            Polywork
          </a>
          <a
            className="mx-1 md:mx-2 py-1 px-2 rounded bg-fuchsia-400 hover:bg-fuchsia-500 text-fuchsia-800"
            href="https://stackblitz.com/@Uvacoder"
          >
            Stackblitz
          </a>
          <a
            className="mx-1 md:mx-2 py-1 px-2 rounded bg-yellow-400 hover:bg-yellow-500 text-yellow-800"
            href="https://www.figma.com/@uvacoder"
          >
            Figma
          </a>
          <a
            className="mx-1 md:mx-2 py-1 px-2 rounded bg-indigo-400 hover:bg-indigo-500 text-indigo-800"
            href="https://substack.com/profile/106268192-alec-campbell"
          >
            Substack
          </a>
          <a
            className="mx-1 md:mx-2 py-1 px-2 rounded bg-red-400 hover:bg-red-500 text-red-800"
            href="https://indieweb.social/@uvacoder"
          >
            Mastadon
          </a>
          <a
            className="mx-1 md:mx-2 py-1 px-2 rounded bg-sky-600 hover:bg-sky-500 text-sky-800"
            href="https://codesandbox.io/u/Uvacoder"
          >
            Codesndbox
          </a>
          <a
            className="mx-1 md:mx-2 py-1 px-2 rounded bg-pink-200 hover:bg-pink-300 text-pink-400"
            href="https://uvacoder.gumroad.com/"
          >
            Gumroad
          </a>
        </div>
      </div>
    </div>
  </section>
);
