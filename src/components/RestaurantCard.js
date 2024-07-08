import { IMG_CDN_URL } from "../constant";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestrauntCard = ({
  props
}) => {
  const { user } = useContext(UserContext);
  return (
    <div data-testid="resCard" className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={IMG_CDN_URL + props?.cloudinaryImageId} />
      <h2 className="font-bold text-xl">{props?.name}</h2>
      <h3>{props?.cuisines?.join(", ")}</h3>
      <h4>{props?.lastMileTravelString}</h4>
      <h5 className="font-bold">
        {user.name} - {user.email}
      </h5>
    </div>
  );
};

export default RestrauntCard;
