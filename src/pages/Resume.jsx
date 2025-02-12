import {
  Button,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";
import { BsBook } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Resume() {
  const skills = [
    "HTML",
    "CSS",
    "BOOTSTRAP",
    "TAILWIND CSS",
    "FLOWBITE",
    "JAVASCRIPT",
    "REACTJS",
    "NODEJS",
    "MONGODB",
    "MYSQL",
    "PUG",
    "POSTMAN"
  ];
  useEffect(() => {
    AOS.init({
      duration: 1000, // Customize animation duration
      // once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div className="p-2">
      <p data-aos='fade-up' className="text-6xl font-semibold font-sans mb-5 text-white">Resume</p>
      <Timeline>
        <TimelineItem>
          <TimelinePoint icon={BsBook} />
          <TimelineContent>
            <TimelineTitle data-aos='zoom-in' className="text-3xl text-white">
              Education
            </TimelineTitle>
          </TimelineContent>
          <TimelinePoint />
          <TimelineContent>
            <TimelineTime data-aos='zoom-in'  className="text-white">2021-24</TimelineTime>
            <TimelineTitle data-aos='zoom-in'>Bachelor's</TimelineTitle>
            <TimelineBody data-aos='zoom-in' className="text-white">
              I hold a Bachelor of Computer Applications (BCA) degree from
              Vivekananda Global University, Jaipur, completing my studies from
              2021 to 2024. I graduated with an impressive CGPA of 8.12/10,
              demonstrating my academic excellence and dedication to my field of
              study. During my time at VGU, I gained a solid foundation in
              computer applications, programming languages, and software
              development, preparing me for a successful career in
              the tech industry.
            </TimelineBody>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelinePoint icon={BsBook} />
          <TimelineContent>
            <TimelineTitle data-aos='zoom-in' className="text-3xl text-white">
              Experience
            </TimelineTitle>
          </TimelineContent>
          <TimelinePoint />
          <TimelineContent>
            <TimelineTime  data-aos='zoom-in' className="text-white">
              May 2024 - Current
            </TimelineTime>
            <TimelineTitle data-aos='zoom-in'>Frontend Developer Intern, Pi3Tech</TimelineTitle>
            <TimelineBody data-aos='zoom-in' className="text-white">
              <li data-aos='zoom-in'>
                {" "}
                - Gained hands-on experience in designing and developing
                responsive, user-friendly web applications as a Frontend
                Developer Intern at Pi3Tech.
              </li>
              <li data-aos='zoom-in'>
                - Utilized HTML, CSS, JavaScript, and frameworks/libraries like
                React, Bootstrap, Flowbite, Express to build and improve web
                applications.
              </li>
              <li data-aos='zoom-in'>
                - Developed and maintained clean, modular, and reusable code,
                ensuring high-quality standards and best practices.
              </li>
              <li data-aos='zoom-in'>
                - Currently continuing to learn and grow as a Frontend
                Developer, expanding my skill set and expertise in the field.
              </li>
            </TimelineBody>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      <p data-aos='zoom-in' className="text-5xl font-semibold text-white font-sans pt-4 pb-3">
        My Skills
      </p>
      <div className="flex-wrap flex">
      {skills.map((skill, index) => (
        <button
          data-aos='zoom-in'
          key={index}
          className="bg-gray-300 opacity-90 text-gray-700 p-4 m-1 rounded"
        >
          {skill}
        </button>
      ))}
      </div>
    </div>
  );
}
