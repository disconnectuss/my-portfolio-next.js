"use client";
import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const LanguageSwitcher = () => {
  const { language, switchLanguage } = useLanguage();

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => switchLanguage("en")}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          language === "en"
            ? "bg-blue-600 text-white"
            : "bg-gray-700 text-gray-300 hover:bg-gray-600"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => switchLanguage("tr")}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          language === "tr"
            ? "bg-blue-600 text-white"
            : "bg-gray-700 text-gray-300 hover:bg-gray-600"
        }`}
      >
        TR
      </button>
    </div>
  );
};

export default LanguageSwitcher;
