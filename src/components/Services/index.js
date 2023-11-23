import React, { useState } from "react";
import ServicesBar from "../ServicesBar";
import './index.scss'
import Main from "./Main";
import WebDev from "./WebDevelopment";
import SoftwareDevelopment from "./SoftwareDevelopment";
import Projects from "./Projects";

// ... (imports remain unchanged)

const Services = () => {
  const [showPage, setShowPage] = useState("services");

  return (
    <div className="services-page">
      <div id="services" className="flex h-max bg-[#1e1e1e]">
        <div className="bg-[#1e1e1e] lg:pl-72 h-full ">
          <div className="bg-[#424042] h-16 w-full fixed hidden lg:block">
            <ServicesBar
              showPage={showPage}
              setShowPage={setShowPage}
            />
          </div>
          {showPage === "Main" ? (
            <div className="all-services">
              <Main id="Main" />
              {/* <Project1 id="Project1" /> */}
              {/* <Project2 id="Project2" />
                  <Project3 id="Project3" /> */}
            </div>
          ) : showPage === "Web Development" ? (
            <WebDev id="WebDevelopment" />
            ) : showPage==="Software Development" ? (
              <SoftwareDevelopment id="SoftwareDevelopment" />
            ) : showPage==="Projects" ? (
              <Projects id="Projects" />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Services;

