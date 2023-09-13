import React from "react";
import { useState, useEffect } from "react";
import "./projects.css";
import data from "./data/projects.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

export const Projects = () => {
  const [index, setIndex] = useState(0);
  const [proj, setProj] = useState(data.Projects[index]);

  useEffect(() => {
    function setter() {
      setProj(data.Projects[index]);
    }
    setter();
  }, [index]);

  const next = async () => {
    if (index === data.Projects.length - 1) {
      setIndex(0);
    } else {
      setIndex((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (index === 0) {
      setIndex(data.Projects.length - 1);
    } else {
      setIndex((prev) => prev - 1);
    }
  };
  const livebutton = () => {
    if (proj.Live !== "none") {
      return (
        <motion.a
          initial={{ opacity: 0, y: "5px" }}
          whileInView={{ opacity: 1, y: "0px" }}
          transition={{ duration: 0.5 }}
          className="resume-button"
          href={proj.Live}
        >
          <FontAwesomeIcon icon={faGlobe} /> Live Page
        </motion.a>
      );
    }
  };
  return (
    <div id="projects" className="projects">
      <div className="projects-content">
        <h2>Projects</h2>
        <h3>{proj.Name}</h3>  
        <div className="button-row">
          <button onClick={prev}>&lt;</button>
          <AnimatePresence mode="wait">
            <motion.img
              key={"./data/" + proj.Name + ".png"}
              src={require("./data/" + proj.Name + ".png")}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          </AnimatePresence>
          <button onClick={next}>&gt;</button>
        </div>
        <p>{proj.Desc}</p>
        <motion.a
          initial={{ opacity: 0, y: "5px" }}
          whileInView={{ opacity: 1, y: "0px" }}
          transition={{ duration: 0.5 }}
          className="resume-button"
          href={proj.Git}
        >
          <FontAwesomeIcon icon={faGithub} /> View Code
        </motion.a>
        {livebutton()}
        <p>
          {index + 1}/{data.Projects.length}
        </p>
      </div>
    </div>
  );
};
