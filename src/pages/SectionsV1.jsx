import React, { useEffect, useState } from "react";
import { sections } from "../assets/data/sections";
import { Link } from "react-router-dom";
import { Spinner } from "flowbite-react";
import SectionCardV1 from "../components/SectionCardV1";

const SectionsV1 = () => {
  const [dataFetched, setDataFetched] = useState(false);

  // Simulate fetching data with a delay of 2 seconds
  useEffect(() => {
    setTimeout(() => {
      setDataFetched(true);
    }, 1000);
  }, []);

  return (
    <div className=" my-4 px-2">
      {dataFetched ? (
        sections.map((section, index) => (
          <React.Fragment key={index}>
            <Link to={`/sections/${section.sectionName.toLowerCase()}`}>
              <SectionCardV1
                key={index}
                sectionName={section.sectionName}
                sectionImage={section.sectionImage}
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
  );
};

export default SectionsV1;
