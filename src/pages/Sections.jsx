import React from "react";
import SectionCard from "../components/SectionCard";
import { sections } from "../assets/data/sections";
import { Link } from "react-router-dom";

const Sections = () => (
  <div className="sm:max-w-4xl lg:max-w-7xl mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 my-4">
    {sections.map((section, index) => (
      <React.Fragment key={index}>
        <Link to={`/sections/${section.sectionName.toLowerCase()}`}>
          <SectionCard
            key={index}
            sectionName={section.sectionName}
            sectionImage={section.sectionImage}
          />
        </Link>
      </React.Fragment>
    ))}
  </div>
);

export default Sections;
