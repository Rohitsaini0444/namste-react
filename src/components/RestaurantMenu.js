import { useParams } from "react-router-dom";
import useResMenu from "../../utils/useResMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const restaurantMenu = useResMenu(resId);
    
    if (!restaurantMenu) {
        return <Shimmer />;
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