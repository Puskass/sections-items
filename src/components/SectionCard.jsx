import React from "react";

const SectionCard = ({ sectionName, sectionImage, id}) => {
  return (
    <div id={id} className="hover:animate-bump max-w-lg mx-auto bg-white rounded-lg shadow-lg dark:bg-gray-700 mb-2 relative overflow-hidden">
      <img
        className="rounded-t-lg h-52 sm:h-72 lg:h-96 w-full object-cover"
        src={sectionImage}
        alt={sectionName}
      />
      <div className="flex items-center p-3">
        <h1 className="sm:text-3xl text-2xl font-bold sm:py-4 dark:text-white relative z-10">
          {sectionName}
        </h1>
          <svg
            className="w-5 h-5 mr-3 absolute right-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
      </div>
    </div>
  );
};

export default SectionCard;
