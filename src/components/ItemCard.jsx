import React from "react";

const ItemCard = ({ item }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h3 className="text-xl font-bold">{item.title}</h3>
      <p>{item.description}</p>
      <p>
        {item.price} {item.currency}
      </p>
    </div>
  );
};

export default ItemCard;
