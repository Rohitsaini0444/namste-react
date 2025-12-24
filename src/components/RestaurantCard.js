import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
    const { cloudinaryImageId, name, avgRating, cuisines, sla } = props?.resData?.info;
    return (
        <div className="restaurant-card">
            <img className="restaurant-logo" src={`${CDN_URL}${cloudinaryImageId}`} alt="restaurant-logo" />
            <div className="name">{name}</div>
            <div className="star rating" >{avgRating}⭐</div>
            <div className="cuisine">{cuisines?.join(", ")}</div>
            <div className="delivery-time">{sla?.deliveryTime} mins</div>
        </div>
    );
}
export default RestaurantCard;