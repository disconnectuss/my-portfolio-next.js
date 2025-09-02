"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React & React Native 🚀 (My daily superpowers!)</li>
        <li>JavaScript & TypeScript 💪 (Fluent in both dialects)</li>
        <li>Node.js 🔧 (Backend magic happens here)</li>
        <li>MongoDB 📊 (Data whisperer)</li>
        <li>HTML5 & CSS3 🎨 (Making things pretty since day 1)</li>
        <li>GraphQL 🔗 (Efficient data fetching ninja)</li>
        <li>Redux Toolkit 🏪 (State management zen master)</li>
        <li>Full Stack Development 🌐 (Jack of all trades, master of fun!)</li>
      </ul>
    ),
  },
  {
    title: "Journey",
    id: "journey",
    content: (
      <ul className="list-disc pl-2">
        <li>🎯 Self-taught Full Stack Developer (Google University graduate!)</li>
        <li>📚 Continuous Learning Enthusiast (Always exploring new tech)</li>
        <li>🌟 Open Source Contributor (Giving back to the community)</li>
        <li>☕ Coffee-to-Code Converter (Powered by caffeine & curiosity)</li>
      </ul>
    ),
  },
  {
    title: "Focus",
    id: "focus",
    content: (
      <ul className="list-disc pl-2">
        <li>🔬 Exploring cutting-edge frontend & backend technologies</li>
        <li>📱 Optimizing React Native mobile experiences</li>
        <li>🏗️ Building scalable, maintainable full-stack solutions</li>
        <li>🎨 Crafting delightful UI/UX that users actually enjoy</li>
        <li>🤝 Collaborating with amazing teams on impactful projects</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Hey there! 👋 I'm a full-stack developer who believes great software should be 
            both powerful and delightful. When I'm not crafting pixel-perfect UIs or 
            optimizing databases, you'll find me exploring the latest tech trends or 
            debugging code with way too much enthusiasm! 🤓
            <br /><br />
            I specialize in React and React Native, turning complex problems into elegant 
            solutions. From e-commerce platforms to mobile apps, I've built projects that 
            real people use and love. My secret? I code with empathy - always thinking 
            about the human on the other side of the screen. 💝
            <br /><br />
            Currently seeking exciting opportunities to collaborate with teams who value 
            innovation, quality, and maybe a good laugh during code reviews! 😄
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("journey")}
              active={tab === "journey"}
            >
              {" "}
              Journey{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("focus")}
              active={tab === "focus"}
            >
              {" "}
              Focus{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
