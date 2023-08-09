import React, { useEffect, useState } from "react";
import SectionCard from "../components/SectionCard";
import { sections } from "../assets/data/sections";
import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar";
import LoadingSpinner from "../shared/LoadingSpinner";

const Sections = () => {
  const [dataFetched, setDataFetched] = useState(false);

  // Simulate fetching data with a delay of 2 seconds
  useEffect(() => {
    setTimeout(() => {
      setDataFetched(true);
    }, 1000);
  }, []);

  return (
    <>
      <Navbar />
      <div className="sm:max-w-4xl lg:max-w-7xl mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 py-4 px-2">
        {dataFetched ? (
          sections.map((section, index) => (
            <React.Fragment key={index}>
              <Link to={`/sections/${section.sectionName.toLowerCase()}`}>
                <SectionCard
                  key={index}
                  sectionName={section.sectionName}
                  sectionImage={section.sectionImage}
                  id={`section${index}`}
                />
              </Link>
            </React.Fragment>
          ))
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </>
  );
};

export default Sections;
