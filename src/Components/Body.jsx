import { restaurantList } from "./Constant.js";
import { useEffect, useState } from "react";
import { RestaurantCard as Card } from "./RestaurantCard.jsx";
function Body() {
  const [search, setSearch] = useState("");
  const [filteredRestaurantList, setFilteredRestaurantList] = useState(restaurantList);
  function filterRestaurantList(search, restaurants) {
    return restaurants.filter((res) => res.data.name.toLowerCase().includes(search.toLowerCase()));
  }
  useEffect(() => {
    if (search === "") {
      setFilteredRestaurantList(restaurantList);
    }
  }, [filteredRestaurantList, search]);
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for restaurants"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={() => {
            setFilteredRestaurantList(filterRestaurantList(search, filteredRestaurantList));
          }}
        >
          Search
        </button>
      </div>
      <div className="body">
        {filteredRestaurantList.map((res) => {
          return <Card key={res.data.id} resData={res} />;
        })}
      </div>
    </>
  );
}

export default Body;
