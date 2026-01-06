import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
    const { cloudinaryImageId, name, avgRating, cuisines, sla, id } = props?.resData?.info;
    return (
        <div className="flex flex-col p-4 m-4 bg-white rounded-lg shadow-md" key={id}>
            <img className="w-60 h-60 rounded-lg" src={`${CDN_URL}${cloudinaryImageId}`} alt="restaurant-logo" />
            <div className="ml-2">{name}</div>
            <div className="ml-2" >{avgRating}⭐</div>
            <div className="ml-2">{cuisines?.join(", ")}</div>
            <div className="ml-2">{sla?.deliveryTime} mins</div>
        </div>
    );
}
export default RestaurantCard;