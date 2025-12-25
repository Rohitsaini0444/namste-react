import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const BodyComponent = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]); 

    useEffect( () => {
         fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9966135&lng=77.5920581&collection=80471&tags=layout_BAU_Contextual%2Cpancake&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        const json = await data.json();
        console.log(json);
        setRestaurants(json?.data?.cards);
        setFilteredRestaurants(json?.data?.cards);
    }

    if (restaurants.length === 0) {
        return <Shimmer />;
    }

    return (
        <div className="restaurant-container">
            <div className="filter-area">
                <div className="search-container">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>
                    <button className="search-btn" onClick={()=>{
                        const filteredRestaurants = restaurants.filter((res) => res?.card?.card?.info?.name?.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurants(filteredRestaurants);
                    }}>Search</button>
                </div>
                <div className="filter-container">
                    <button className="filter-btn" onClick={() => {
                        const filteredRestaurants = restaurants.filter((res) => res?.card?.card?.info?.avgRating > 4.5);
                        setRestaurants(filteredRestaurants);
                    }}>Top Rated Restaurants</button>
                </div>
            </div>
            <div className="restaurant-container">
                {filteredRestaurants.map((restaurant) => {
                    if (restaurant?.card?.card?.info) {
                        console.log("CARD",restaurant?.card?.card);
                        return <RestaurantCard key={restaurant?.card?.card?.info?.id} resData={restaurant?.card?.card} />
                    }
                })}
            </div>
        </div>
    );
}

export default BodyComponent;