import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { menu } from "../assets/data/menu";
import ItemCard from "../components/ItemCard";
import Input from "../shared/Input";
import debounce from "lodash.debounce";
import LoadingSpinner from "../shared/LoadingSpinner";

const Items = () => {
  const [dataFetched, setDataFetched] = useState(false);
  const [search, setSearch] = useState("");
  // const [filteredItems, setFilteredItems] = useState([]);

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

  const formattedSearch = search.toLowerCase().replace(/\s/g, "");

  const filteredItems = section.items.filter((item) =>
  item.title.toLowerCase().replace(/\s/g, "").includes(formattedSearch)
);
  // Debounce the search function
  // useEffect(() => {
  //   const debounceSearch = debounce(() => {
  //     const filteredItems = section.items.filter((item) =>
  //       item.title.toLowerCase().replace(/\s/g, "").includes(formattedSearch)
  //     );
  //     setFilteredItems(filteredItems);
  //   }, 500);

  //   debounceSearch();
  //   console.log('Rerendered');
  //   return () => {
  //     debounceSearch.cancel(); // Cleanup function to cancel the debounce
  //   };
  // }, [formattedSearch, section.items]);

  return (
    <div className="max-w-lg mx-auto px-2">
      <Input value={search} onChange={setSearch} />

      {dataFetched ? (
        <div>
          <h2 className="text-6xl font-bold py-2 mb-6">
            {section.sectionName}
          </h2>

          {filteredItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default Items;
