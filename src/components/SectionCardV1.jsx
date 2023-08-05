import React from "react";

const SectionCardV1 = ({ sectionName, sectionImage }) => {
  const backgroundStyle = {
    backgroundImage: `url(${sectionImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="mb-3 max-w-lg mx-auto bg-white border border-gray-200 rounded-lg shadow md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 relative">
      <div
        className="absolute inset-0 bg-gradient-to-b from-amber-600 to-amber-100 opacity-10"
        style={{ zIndex: 1 }}
      />
      <div
        className="object-cover w-full h-36 sm:h-72 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        style={backgroundStyle}
        alt=""
      />
      <div className="absolute top-0 left-0 p-4">
        <h5 className="text-2xl font-bold dark:text-white">{sectionName}</h5>
      </div>
      <div className="absolute bottom-0 right-0 p-4">
        <button className="inline-flex px-3 py-2 font-medium text-center text-white bg-amber-400 rounded-lg hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-amber-300 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800">
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
    </div>
  );
};

export default SectionCardV1;
