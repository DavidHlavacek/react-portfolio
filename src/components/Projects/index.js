import React, { useState } from "react";
import ProjectsBar from "../ProjectsBar";
import './index.scss'
import Project from "./Project";
import Project1 from "./Project1";

// ... (imports remain unchanged)

const Projects = () => {
  const [showPage, setShowPage] = useState("projects");

  return (
    <div className="projects-page">
      <div id="projects" className="flex h-max bg-[#1e1e1e]">
        <div className="bg-[#1e1e1e] lg:pl-72 h-full ">
          <div className="bg-[#424042] h-16 w-full fixed hidden lg:block">
            <ProjectsBar
              showPage={showPage}
              setShowPage={setShowPage}
            />
          </div>
          {showPage === "Projects" ? (
            <div className="all-projects">
              <Project id="Project" />
              {/* <Project1 id="Project1" /> */}
              {/* <Project2 id="Project2" />
                  <Project3 id="Project3" /> */}
            </div>
          ) : showPage === "Project1" ? (
            <Project1 id="Project1" />
            // ) : showPage==="project2" ? (
            //   <Project2 id="Project1" />
            // ) : showPage==="project3" ? (
            //   <Project3 id="Project3" />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Projects;

