import React, { useState } from "react";
import Image from "next/image";
import projectData from "../data/projectData.js";

const Projects = () => {
  const [project, setProject] = useState(projectData[0]);
  const [menu, setMenu] = useState("collapse");
  const handleClick = (id) => {
    setProject(projectData[id - 1]);
    handleMenu();
  };

  const handleMenu = () => {
    if (menu === "collapse") {
      setMenu("visible");
    } else if (menu === "visible") {
      setMenu("collapse");
    }
    console.log(menu);
  };
  console.log(project);
  return (
    <section className="m-2 font-serif ">
      <div className="space-y-1">
      <h1 className="text-xl">My projects</h1>
      <button
        onClick={handleMenu}
        className="rounded-xl border-2 border-black bg-purple-900 text-yellow-300"
      >
        Choose:
      </button>

      <div className={`flex flex-col ${menu}`}>
        {projectData?.map((project, index) => {
          return (
            <button key={index} onClick={() => handleClick(project.id)}>
              <div className="">{project.title}</div>
            </button>
          );
        })}
      </div>
      </div>

      <div>{project?.title}</div>
      <div>{project?.description}</div>
      <div>
        {project?.image && <Image src={project.image} alt="project preview" />}
      </div>
    </section>
  );
};

export default Projects;
