import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const BodyComponent = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        fetch("https://namastedev.com/api/v1/listRestaurants")
            .then((response) => response.json())
            .then((data) => {
                const restaurants =
                    data?.data?.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
                console.log("res list", restaurants);
                setRestaurants(restaurants);
                setFilteredRestaurants(restaurants);
            })
            .catch((error) => console.error("Error:", error));
    }

    if (restaurants.length === 0) {
        return <Shimmer />;
    }

    return (
        <div className="restaurant-container">
            <div className="filter-area">
                <div className="search-container">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
                    <button className="search-btn" onClick={() => {
                        const filteredRestaurants = restaurants.filter((res) => res?.info?.name?.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurants(filteredRestaurants);
                    }}>Search</button>
                </div>
                <div className="filter-container">
                    <button className="filter-btn" onClick={() => {
                        const filteredRestaurants = restaurants.filter((res) => res?.info?.avgRating > 4.5);
                       console.log("Filtered Restaurants by top rating:", filteredRestaurants); 
                        setFilteredRestaurants(filteredRestaurants);
                    }}>Top Rated Restaurants</button>
                </div>
            </div>
            <div className="restaurant-container">
                {filteredRestaurants.map((restaurant) => {
                    if (restaurant?.info) {
                        return <Link to={`/restaurant/${restaurant?.info?.id}`} key={restaurant?.info?.id}><RestaurantCard key={restaurant?.info?.id} resData={restaurant} /></Link>
                    }
                })}
            </div>
        </div>
    );
}

export default BodyComponent;