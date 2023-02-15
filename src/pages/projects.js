import React, { useState } from "react";

const Projects = () => {
  const [toggle, setToggle] = useState("");
  const handleChange = (e) => {
    setToggle(e.target.value);
  };
  return (
    <div>
      <section>
        <label for="projects">Choose a project:</label>
        <select name="projects" id="projects" onChange={handleChange}>
          <option value="1">Project 1</option>
          <option value="2">Project 2</option>
          <option value="3">Project 3</option>
        </select>
      </section>
      <section>
        <div>{toggle}</div>
      </section>
    </div>
  );
};

export default Projects;
