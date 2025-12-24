import { restaurantList } from "../../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const BodyComponent = () => {
    const [restaurants, setRestaurants] = useState(restaurantList);
    return (
        <div className="restaurant-container">
            <div className="filter-area">
                <div className="search-container">
                    <input type="text" className="search-box" />
                    <button className="search-btn">Search</button>
                </div>
                <div className="filter-container">
                    <button className="filter-btn" onClick={()=>{
                        console.log("Clicked", restaurantList);
                        const filteredRestaurants = restaurantList.filter((res)=> res.card.card.info.avgRating>4.5);
                        setRestaurants(filteredRestaurants);
                    }}>Top Rated Restaurants</button>
                </div>
            </div>
            <div className="restaurant-container">
                {restaurants.map((restaurant) => {
                        return <RestaurantCard key={restaurant?.card?.card?.info?.id} resData={restaurant?.card?.card} />
                })}
            </div>
        </div>
    );
}

export default BodyComponent;