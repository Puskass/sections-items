import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { menu } from "../assets/data/menu";
import ItemCard from "../components/ItemCard";
import { Spinner } from "flowbite-react";

const Items = () => {
  const [dataFetched, setDataFetched] = useState(false);

  // Simulate fetching data with a delay of 2 seconds
  useEffect(() => {
    setTimeout(() => {
      setDataFetched(true);
    }, 1000);
  }, []);

  const { sectionName } = useParams();
  const section = menu.find(
    (section) => section.sectionName.toLowerCase() === sectionName.toLowerCase()
  );

  return (
    <div className="max-w-lg mx-auto px-2">
      {dataFetched ? (
        <div>
          <h2 className="text-6xl font-bold py-2 mb-6">
            {section.sectionName}
          </h2>
          {section.items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
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

export default Items;