import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, languageSwitcher }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
      {languageSwitcher && (
        <li className="mt-4">
          {languageSwitcher}
        </li>
      )}
    </ul>
  );
};

export default MenuOverlay;
