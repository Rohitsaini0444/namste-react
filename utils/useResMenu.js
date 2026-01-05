import { useEffect } from "react";
import { MENU_API_URL } from "../utils/constants";
import { useState } from "react";

const useResMenu = (resId) => {
    const [restaurantMenu, setRestaurantMenu] = useState(null);

    useEffect(() => {
        fetchData(resId);
    }, [resId]);


    const fetchData = async (resId) => {
        const data = await fetch(MENU_API_URL + resId);
        const json = await data.json();
        setRestaurantMenu(json);
    }

    return restaurantMenu;
};

export default useResMenu;