import { Spinner } from "flowbite-react";
import React from "react";

const Home = () => {
  return (
    <div className="text-center">
      <h1>This is Home page go in the url to /sections</h1>
      <div className="text-center">
        <Spinner
          aria-label="Center-aligned spinner"
          color="warning"
          size="lg"
        />
      </div>
    </div>
  );
};

export default Home;
