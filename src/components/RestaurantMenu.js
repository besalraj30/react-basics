import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constant";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";

const RestaurantMenu = () => {
  // how to read a dynamic URL params
  const { resId } = useParams();
   const resInfo = useRestaurantMenu(resId);
   console.log(resInfo);
   const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
   const { itemCards } = resInfo?.cards[2]?.groupedCard?.REGULAR?.cards[1]?.card?.card;
   const onlineStatus = useOnlineStatus();

  if(onlineStatus === 'false') {
    return <h1>OOps! Looks like you are offline</h1>
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restraunt id: {resId}</h1>
        <h2>{name}</h2>
        <p>{cuisines.join(",")} - {costForTwoMessage}</p>
        {/* <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating} stars</h3>
        <h3>{restaurant?.costForTwoMsg}</h3> */}
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id} >
              {item.card.info.name} - {" Rs."}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
