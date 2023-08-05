import React from "react";

const SectionCard = ({ sectionName, sectionImage }) => {
  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg dark:bg-gray-700 mb-8 p-4">
      <img
        className="rounded-t-lg h-72 sm:h-96 w-full object-cover"
        src={sectionImage}
        alt={sectionName}
      />
      <h3 className="sm:text-3xl text-2xl font-bold py-2 sm:py-4 dark:text-white">
        {sectionName}
      </h3>
      <button className="inline-flex items-center px-3 py-2 font-medium text-center text-white bg-amber-400 rounded-lg hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-amber-300 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800">
        Check out more
        <svg
          className="w-3.5 h-3.5 ml-2"
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
      </button>
    </div>
  );
};

export default SectionCard;
