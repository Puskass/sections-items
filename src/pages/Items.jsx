import React from "react";
import { useParams } from "react-router-dom";
import { menu } from "../assets/data/menu";
import ItemCard from "../components/ItemCard";

const Items = () => {
  const { sectionName } = useParams();
  const section = menu.find(
    (section) => section.sectionName.toLowerCase() === sectionName.toLowerCase()
  );

  return (
    <div>
      {section ? (
        <div>
          <h2>{section.sectionName}</h2>
          {section.items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div>
          <p>Section not found!</p>
        </div>
      )}
    </div>
  );
};

export default Items;
