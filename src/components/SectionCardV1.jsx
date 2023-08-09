import React from "react";

const SectionCardV1 = ({ sectionName, sectionImage, id }) => {
  const backgroundStyle = {
    backgroundImage: `url(${sectionImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div id={id} className="hover:animate-bump mb-4 max-w-lg mx-auto relative">
      <div
        className="rounded-xl shadow-lg object-cover w-full h-36 sm:h-72"
        style={backgroundStyle}
        alt=""
      />

      <div className="rounded-xl absolute inset-0 bg-gradient-to-br from-black to-transparent opacity-50" />

      <div className="flex items-center text-white absolute top-0 left-0 p-4">
        <h5 className="text-3xl font-semibold">{sectionName}</h5>
      </div>
      <div className="absolute bottom-0 right-0 p-4 text-white">
        <svg
          className="w-6 h-4 ml-4 mt-2"
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

export default SectionCardV1;
