import React from "react";
import { sections } from "../assets/data/sections";

const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 z-20 bg-gray-800 p-4 mb-8">
      <div className="max-w-md mx-auto">
        <ul className="flex justify-evenly">
          {sections.map((section, index) => (
            <li
              className="px-2 mx-1 py-0.5 border border-white rounded-full text-white hover:bg-amber-500 hover:cursor-pointer"
              key={index}
            >
              <a
                href={`#section${index}`}
                onClick={(e) => {
                  e.preventDefault();
                  const sectionCard = document.getElementById(
                    `section${index}`
                  );
                  sectionCard.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {section.sectionName}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
