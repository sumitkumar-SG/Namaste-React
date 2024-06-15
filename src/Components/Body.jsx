import { restaurantList } from "./Constant.js";
import { RestaurantCard as Card } from "./RestaurantCard.jsx";
function Body() {
  return (
    <div className="body">
      {restaurantList.map((res) => {
        return <Card key={res.data.id} resData={res} />;
      })}
    </div>
  );
}

export default Body;
