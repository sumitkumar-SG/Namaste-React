import { IMG_CDN_URL } from "./Constant";

export function RestaurantCard(props) {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime } = resData?.data;
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="img" />
      <div className="details">
        <span>{name}</span>
        <span>{avgRating}</span>
      </div>
      <div className="description">
        <p>{costForTwo}</p>
        <p>{cuisines.join(", ")}</p>
        <p>{deliveryTime}</p>
      </div>
    </div>
  );
}

export default RestaurantCard;
