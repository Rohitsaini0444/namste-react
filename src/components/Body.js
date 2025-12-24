import { restaurantList } from "../../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const BodyComponent = () => {
    return (
        <div className="restaurant-container">
            <div className="search-container">
                <input type="text" className="search-box" />
                <button className="search-btn">Search</button>
            </div>
            <div className="restaurant-container">
                {restaurantList.map((restaurant) => {
                    if (restaurant?.card?.card?.info) {
                        return <RestaurantCard key={restaurant.card.card.info?.id} resData={restaurant.card.card} />
                    }
                })}
            </div>
        </div>
    );
}

export default BodyComponent;