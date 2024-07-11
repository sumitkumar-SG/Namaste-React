import { useEffect, useState } from "react";
import { RestaurantCard as Card } from "./RestaurantCard.jsx";
function Body() {
  const [search, setSearch] = useState("");
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [listRestaurant, setListRestaurant] = useState([]);
  function filterRestaurantList(search, restaurants) {
    return restaurants.filter((res) => res.data.name.toLowerCase().includes(search.toLowerCase()));
  }
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.45970&lng=77.02820&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    setListRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

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
          return <Card key={res.info.id} resData={res} />;
        })}
      </div>
    </>
  );
}

export default Body;
