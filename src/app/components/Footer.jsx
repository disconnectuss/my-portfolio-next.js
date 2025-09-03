"use client";
import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const Footer = () => {
  const { messages } = useLanguage();
  const footer = messages.footer;

  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>LOGO</span>
        <p className="text-slate-600">{footer.rights}</p>
      </div>
    </footer>
  );
};

export default Footer;
