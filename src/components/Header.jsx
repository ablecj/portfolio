import React from "react";
import { Profile, Able } from "../assets";

const Header = () => {
  // function  to handle open cv in new window
  const openPdfInNewWindow = () => {
    window.open(Able, "_blank");
  };

  return (
    <div
      className="w-full flex flex-col lg:flex-row px-8 md:px-10
    gap-10 2xl:gap-20 py-20"
      data-aos="fade-down"
      data-aos-offset="100"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <div className="flex flex-col mb-20 lg:mb-0">
        <span className="text-lg font-bold text-orange-700">
          FULL-STACK DEVELOPER
        </span>
        <div className="flex gap-4 items-center my-4">
          <h1
            className="text-gray-800 dark:text-neutral-100
             text-5xl 2xl:text-7xl font-bold text-center"
          >
            I'm a
          </h1>
          <div
            className="flex item-center justify-center
            text-white shadow-lg bg-blue-800 dark:bg-[#224cff10]
            dark:text-[#224cff] rounded-full"
          >
            <p
              className="text-3xl 2xl:text-5xl font-bold px-5 py-2
                pb-2 text-center "
            >
              Developer
            </p>
          </div>
        </div>
        <h1
          className="text-5xl 2xl:text-7xl font-extrabold
         text-black dark:text-neutral-100 tracking-wider"
        >
          Able C J
        </h1>

        <p
          className="text-md text-black
         dark:text-gray-100 mt-5 2xl:mt-10"
        >
          I'm a self-taught FULL-STACK Developer. Through countless hours of
          trial and error, countless bug-squashing sessions, and the relentless
          pursuit of knowledge, I've honed my abilities as a MERN stack
          developer. I've not only acquired the technical know-how but also
          developed a problem-solving mindset that allows me to navigate the
          ever-evolving landscape of web development with confidence.
        </p>
        <div className="mt-10 flex gap-10">
          <button
            className="bg-orange-700 text-lg text-white
             font-semibold rounded-md py-3 px-5"
            onClick={openPdfInNewWindow}
          >
            Hire Me
          </button>
          <a href="#projects">
            <button
              className="text-lg text-white font-semibold
                 rounded-md py-3 px-5 bg-black dark:bg-[#224cff10]"
            >
              Projects
            </button>
          </a>
        </div>
      </div>
      <div className="w-full flex-1 flex justify-center">
        <div
          className="w-[250px] h-[240px] md:w-[300px]
          md:h-[300px] 2xl:w-[500px] 2xl:h-[500px] 
          border rounded-full border-gray-800 dark:border-gray-800
          relative  md:mt-20 lg:mt-0 flex items-center justify-center"
        >
          <img
            src={Profile}
            className="w-full h-full absolute 
              "
            style={{ borderRadius: "50%" }}
            alt="profile"
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
