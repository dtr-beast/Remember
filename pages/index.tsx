import React from "react";

import Pricing from "./index/Pricing";
import ContactUs from "./index/ContactUs";
import Footer from "./index/Footer";
import DownloadApp from "./index/DownloadApp";
import Features from "./index/Features";
import Benefits from "./index/Benefits";

// import "./index/index.css";
import { Navbar } from "./index/Navbar";



export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-xxl-center text-6xl text-indigo-500 tracking-widest title-font mb-1 fs-1">Online
            mind map maker</h1>
          <h1 className="sm:text-3xl  font-medium title-font mb-4 text-gray-900 italic">It all starts with an
            idea.</h1>
          <button
            className="mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Start
            Brainstorming!
          </button>
        </div>
      </div>
      {/*<Cards/>*/}
      <Benefits />

      <Features />
      <Pricing />
      <DownloadApp />

      <ContactUs />
      <Footer />
    </>
  );
}
