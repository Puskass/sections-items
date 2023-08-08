import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { menu } from "../assets/data/menu";
import ItemCard from "../components/ItemCard";
import Input from "../shared/Input";
import LoadingSpinner from "../shared/LoadingSpinner";
import useDebounce from "../hooks/useDebounce";

const Items = () => {
  const [dataFetched, setDataFetched] = useState(false);
  const [search, setSearch] = useState("");

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

  // Use the useDebounce hook to get the debounced search value
  const debouncedSearch = useDebounce(search, 300); // xxx milliseconds delay

  const formattedSearch = debouncedSearch.toLowerCase().replace(/\s/g, "");

  const filteredItems = section.items.filter((item) =>
    item.title.toLowerCase().replace(/\s/g, "").includes(formattedSearch)
  );

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
