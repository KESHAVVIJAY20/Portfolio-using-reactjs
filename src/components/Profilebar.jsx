import { FooterDivider, Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import {
  BsCalendar2Day,
  BsEnvelope,
  BsFacebook,
  BsGeoAlt,
  BsInstagram,
  BsPhone,
  BsWhatsapp,
} from "react-icons/bs";
import MyImage from "../assets/keshav.png";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Profilebar() {
    useEffect(() => {
          AOS.init({ 
            duration: 1000, // Customize animation duration
            once: true, // Whether animation should happen only once - while scrolling down
          });
        }, []);
  return (
    <Sidebar className="md:w-auto w-full" aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item>
            <div className="flex justify-center h-40">
              <img data-aos="zoom-in" className="drop-shadow-blue-lg" src={MyImage} alt="" />
            </div>
            <div className="text-center text-4xl pt-3 font-sans pb-3">
              Keshav Vijay
            </div>
            <div className=" text-center">
              <p className="bg-black bg-opacity-5 rounded-md">Web Developer</p>
            </div>
          </Sidebar.Item>
          <FooterDivider />
          <Sidebar.Item
            icon={BsEnvelope}
            // label="Pro"
            // labelColor="dark"
            className="sm:text-sm"
          >
            Keshavvijay8@gmail.com
          </Sidebar.Item>
          <Sidebar.Item icon={BsPhone}>
            +91 9352515020
          </Sidebar.Item>
          <Sidebar.Item icon={BsCalendar2Day}>
            Aug 20, 2003
          </Sidebar.Item>
          <Sidebar.Item icon={BsGeoAlt}>
            Kota, India
          </Sidebar.Item>
          <Sidebar.ItemGroup className="flex justify-center items-center">
            <a href="https://api.whatsapp.com/send/?phone=+919352515020&text=Hi&type=phone_number" target="_blank"><Sidebar.Item icon={BsWhatsapp}/></a>
            <Sidebar.Item icon={BsFacebook} />
            <a href="https://www.instagram.com/keshavvj_20/" target="_blank"><Sidebar.Item icon={BsInstagram} /></a>
          </Sidebar.ItemGroup>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
