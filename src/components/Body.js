import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/userContext";

const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

const BodyComponent = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const {loggedInUser, updateUser} = useContext(UserContext);

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

    const isOnline = useOnlineStatus();

    if (!isOnline) {
        return <h1>🔴 You are offline! Please check your internet connection.</h1>
    }

    if (restaurants.length === 0) {
        return <Shimmer />;
    }

    return (
        <div className="restaurant-container">
            <div className="width-full flex justify-center items-center">
                <input type="text" className="border border-gray-300 rounded-lg p-2" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value);
                }} />
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2" onClick={() => {
                    const filteredRestaurants = restaurants.filter((res) => res?.info?.name?.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestaurants(filteredRestaurants);
                }}>Search</button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-8" onClick={() => {
                    const filteredRestaurants = restaurants.filter((res) => res?.info?.avgRating > 4.5);
                    console.log("Filtered Restaurants by top rating:", filteredRestaurants);
                    setFilteredRestaurants(filteredRestaurants);
                }}>Top Rated Restaurants</button>
                <input type="text" value={loggedInUser} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2" onChange={(e) => {
                    updateUser(e.target.value)
                }} />
            </div>
            <div className="flex flex-wrap justify-center">
                {filteredRestaurants.map((restaurant) => {
                    if (restaurant?.info) {
                        return <Link to={`/restaurant/${restaurant?.info?.id}`} key={restaurant?.info?.id}>
                            {restaurant?.info?.veg ? <RestaurantCardPromoted key={restaurant?.info?.id} resData={restaurant} /> :
                                <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />}
                        </Link>
                    }
                })}
            </div>
        </div>
    );
}

export default BodyComponent;