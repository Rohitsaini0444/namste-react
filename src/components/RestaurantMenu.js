import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../../utils/constants";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [restaurantMenu, setRestaurantMenu] = useState(null);

    const fetchMenu = async () => {
            // Use CORS proxy to bypass CORS restrictions (browser blocks cross-origin requests)
            const corsProxyUrl = "http://localhost:8000/proxy?url=";
            const apiUrl = `${MENU_API_URL}${resId}`;
            // const fullUrl = corsProxyUrl + apiUrl;
            const fullUrl = `https://namastedev.com/api/v1/listRestaurantMenu/${resId}`;

            const data = await fetch(fullUrl);
            const json = await data.json();
            console.log("Menu data:", json);
            setRestaurantMenu(json);
    }

    useEffect(() => {
        fetchMenu();
    }, [resId]);

    if (!restaurantMenu) {
        return <h2>Loading Menu...</h2>;
    }
    const name = restaurantMenu?.data?.cards[2]?.card?.card?.info?.name;
    const menuList = restaurantMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    return (
        <div>   
            <h1>Restaurant Menu</h1>
            <h2>{name}</h2>
            <ul>
                {menuList?.map((item) => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} - ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                    </li>
                ))}
            </ul>
        </div>
    );
}   
export default RestaurantMenu;