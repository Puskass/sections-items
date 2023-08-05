import React from "react";

const ItemCard = ({ item }) => {
  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg dark:bg-gray-700 mb-8 p-4">
      <h3 className="text-amber-500 sm:text-3xl text-2xl font-bold">
        {item.title}
      </h3>
      <p className="sm:text-lg font-medium dark:text-white py-2">
        {item.description}
      </p>
      <p className="font-bold dark:text-white py-2">
        {item.price} {item.currency}
      </p>
      <button className="inline-flex items-center px-3 py-2 font-medium text-center text-white bg-amber-400 rounded-lg hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-amber-300 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800">
        Dodaj
      </button>
    </div>
  );
};

export default ItemCard;
