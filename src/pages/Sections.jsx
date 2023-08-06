import React, { useEffect, useState } from "react";
import SectionCard from "../components/SectionCard";
import { sections } from "../assets/data/sections";
import { Link } from "react-router-dom";
import { Spinner } from "flowbite-react";
import Navbar from "../shared/Navbar";

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
      <div className="sm:max-w-4xl lg:max-w-7xl mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 my-4 px-2">
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
          <div className="text-center">
            <Spinner
              aria-label="Center-aligned spinner"
              color="warning"
              size="lg"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Sections;
