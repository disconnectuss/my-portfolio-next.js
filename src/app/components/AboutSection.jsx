"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { useLanguage } from "../../context/LanguageContext";

const AboutSection = () => {
  const { messages } = useLanguage();
  const about = messages.about;

  const TAB_DATA = [
    {
      title: about.tabs.skills,
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          {about.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      ),
    },
    {
      title: about.tabs.journey,
      id: "journey",
      content: (
        <ul className="list-disc pl-2">
          {about.journey.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ),
    },
    {
      title: about.tabs.focus,
      id: "focus",
      content: (
        <ul className="list-disc pl-2">
          {about.focus.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ),
    },
  ];
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
          <h2 className="text-4xl font-bold text-white mb-4">{about.title}</h2>
          <p className="text-base lg:text-lg">
            {about.description.split('\n\n').map((paragraph, index) => (
              <React.Fragment key={index}>
                {paragraph}
                {index < about.description.split('\n\n').length - 1 && <br />}
                {index < about.description.split('\n\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              {about.tabs.skills}{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("journey")}
              active={tab === "journey"}
            >
              {" "}
              {about.tabs.journey}{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("focus")}
              active={tab === "focus"}
            >
              {" "}
              {about.tabs.focus}{" "}
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
