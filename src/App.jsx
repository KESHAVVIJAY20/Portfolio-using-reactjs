import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Profilebar from "./components/Profilebar";
import Header from "./components/Header";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <div data-aos="fade-down" className="lg:flex ">
          <Profilebar/>
          <div className="flex-col w-full">
            <div className="fixed top-0 right-0 z-10">
              <Header />
            </div>
            <div className="p-5 bg-teal-400 overflow-y-scroll no-scrollbar">
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/about" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/project" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
