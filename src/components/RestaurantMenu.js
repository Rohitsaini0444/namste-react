import { useParams } from "react-router-dom";
import useResMenu from "../../utils/useResMenu";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const restaurantMenu = useResMenu(resId);
    const [showIndex, setShowIndex] = useState(1);

    if (!restaurantMenu) {
        return <Shimmer />;
    }
    const name = restaurantMenu?.data?.cards[2]?.card?.card?.info?.name;
    const menuList = restaurantMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    const categories = restaurantMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log("categories", categories);
    return (
        <div className="flex flex-col justify-center align-middle m-4 p-4">
            <div><h2 className="font-bold text-xl m-4">{name}</h2></div>
            <ul>
                {categories?.map((category, index) => (
                    <RestaurantCategory
                        key={category?.card?.card?.title}
                        category={category?.card?.card}
                        showIndex={showIndex}
                        setShowIndex={(index) => setShowIndex(index)}
                    />
                ))}
            </ul>
        </div>
    );
}
export default RestaurantMenu;