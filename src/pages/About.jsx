import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCode } from "react-icons/fa";

export default function About() {
  const WorkingArea = [
    {
      title: "Front-End Development",
      description:
        "Building the user interface and user experience of a website or application using HTML, CSS, JavaScript, and frameworks like React",
    },
    {
      title: "Back-End Development",
      description:
        "Building the server-side logic, database integration, and APIconnectivity using languages like Node.js and frameworks like Express",
    },
    {
      title: "Responsive Designs",
      description:
        "Ensuring that websites or applications adapt to different screen sizes, devices, and orientations, providing an optimal user experience regardless of how users access the site.",
    },
  ];
  useEffect(() => {
    AOS.init({
      duration: 1000, // Customize animation duration
      // once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div>
      <p data-aos='fade-up' className="text-6xl font-semibold font-sans pb-10 text-white">About</p>
      <div className="flex-wrap w-100 ">
        <p data-aos='fade-left' className=" text-md pb-5">
          I'm a graduate from Vivekananda Global University, Jaipur
        </p>
        <p data-aos='fade-right' className="text-md">
          I am a front-end web developer. I can provide clean code and pixel
          perfect design. I also make the website more & more interactive with
          web animation. I also make the website more & more interactive with
          web animations. A responsive design make your website accessible to
          all users, regardless of their device.
        </p>
      </div>
      <p data-aos='fade-up' className="text-5xl mt-10 text-white">What I'm Doing ?</p>
      <div className="flex gap-10 flex-wrap mt-10 justify-center">
        {WorkingArea.map((workingarea, index) => (
          <div
            data-aos='zoom-in'
            key={index}
            className="max-w-[430px] flex gap-4 bg-white bg-opacity-45 p-3 rounded-lg"
          >
            {/* <img data-aos='zoom-in' src={workingarea.img} alt={workingarea.title} /> */}
            <p className="flex justify-center items-center"><FaCode size={50} color="white"/></p>
            <div className="w-full">
              <h1 data-aos='fade-down' className="font-bold">{workingarea.title}</h1>
              <p data-aos='fade-up'>{workingarea.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
