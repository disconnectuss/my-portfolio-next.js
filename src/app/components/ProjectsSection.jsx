"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "POS App - MERN Stack with RTK",
    description: "Full-featured Point of Sale system that makes transactions smooth as butter! Built with MERN stack + Redux Toolkit for bulletproof state management. 💳✨",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/disconnectuss/Pos-App-Merstack-RTK",
    previewUrl: "https://github.com/disconnectuss/Pos-App-Merstack-RTK",
  },
  {
    id: 2,
    title: "PuppietShop - TypeScript & RTK",
    description: "E-commerce paradise for pet lovers! 🐕 TypeScript ensures type safety while Redux Toolkit keeps everything organized. Your furry friends deserve the best! 🐾",
    image: "/images/projects/2.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/disconnectuss/PuppietShop-RTK",
    previewUrl: "https://github.com/disconnectuss/PuppietShop-RTK",
  },
  {
    id: 3,
    title: "E-commerce React Case with Jest",
    description: "Shopping made simple! React-powered e-commerce with comprehensive Jest testing. Because nobody likes broken checkout buttons! 🛒✅",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/disconnectuss/E-commerceReactCaseJest",
    previewUrl: "https://github.com/disconnectuss/E-commerceReactCaseJest",
  },
  {
    id: 4,
    title: "Location App - TypeScript",
    description: "Never get lost again! 📍 Location-based app built with TypeScript for rock-solid reliability. Finding your way has never been this elegant! 🗺️",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/disconnectuss/location-app",
    previewUrl: "https://github.com/disconnectuss/location-app",
  },
  {
    id: 5,
    title: "Portfolio - Next.js & TypeScript",
    description: "This very portfolio! 🎨 Built with Next.js & TypeScript, showcasing the perfect blend of performance and personality. Meta, isn't it? 😉",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/disconnectuss/myPortfolio-Next.js-ts",
    previewUrl: "https://github.com/disconnectuss/myPortfolio-Next.js-ts",
  },
  {
    id: 6,
    title: "Explore My GitHub Universe! 🌟",
    description: "30+ repositories of pure coding joy! From experimental prototypes to production-ready apps. Come for the code, stay for the commit messages! 🚀💻",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/disconnectuss?tab=repositories",
    previewUrl: "https://github.com/disconnectuss?tab=repositories",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
