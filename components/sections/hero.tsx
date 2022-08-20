import React from "react";
import { Nav } from "./nav";
import { ProfileImage } from "../base/profile-image";

export const Hero: React.FC = () => (
  <section className="bg-gray-100">
    <Nav />
    <div className="container">
      <div className="flex flex-col items-center my-16">
        <ProfileImage />
        <h1 className="text-4xl font-bold mt-2">Hey, I'm Dr Kimble!</h1>
        <p className="text-2xl text-gray-700 text-center">
          Im a fugitive from Chicago.  Im looking for a one armed man. 
        </p>
        <div className="max-w-sm md:mx-auto my-6 -ml-2">
          <a
            className="mx-1 md:mx-2 py-1 px-2 rounded bg-blue-200 hover:bg-blue-300 text-blue-800"
            data-splitbee-event="Open Twitter"
            href="https://twitter.com/AlecCam43544378"
          >
            Twitter
          </a>
          <a
            className="mx-1 md:mx-2 py-1 px-2 rounded bg-yellow-200 hover:bg-yellow-300 text-yellow-800"
            data-splitbee-event="Open LinkedIn"
            href="https://linkedin.com/en/alecbcampbell"
          >
            LinkedIn
          </a>
          <a
            className="mx-1 md:mx-2 py-1 px-2 rounded bg-purple-300 hover:bg-purple-400 text-purple-800"
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
            className="mx-1 md:mx-2 py-1 px-2 rounded bg-green-200 hover:bg-green-300 text-green-800"
            href="https://codepen.io/uvacoder"
          >
            Codepen
          </a>
        </div>
      </div>
    </div>
  </section>
);
