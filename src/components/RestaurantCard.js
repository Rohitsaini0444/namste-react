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
// Higher Order Component to add "Promoted" label
// to promoted restaurants

export const withPromotedLabel = (RestaurantCard) =>{
    return (props) => {
        return (
            <div>
                <label className="absolute bg-green-500 text-center p-1 rounded-t-lg font-bold">PROMOTED</label>
                <RestaurantCard {...props} />
            </div>
        );
    }
}

export default RestaurantCard;