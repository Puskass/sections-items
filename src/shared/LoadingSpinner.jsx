import { Spinner } from "flowbite-react";
import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="text-center">
      <Spinner aria-label="Center-aligned spinner" color="warning" size="lg" />
    </div>
  );
};

export default LoadingSpinner;
