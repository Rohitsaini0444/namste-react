import ListItem from "./listItem";
import { useState } from "react";
const RestaurantCategory = (props) => {
    const { title, itemCards } = props.category;
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className="w-full my-4 p-4">
            <div className="flex flex-row w-1/2 justify-between">
                <div><h2 className="font-bold">{title} ({itemCards?.length})</h2></div>
                <button className="text-gray-600 font-bold" onClick={() => setIsOpen(!isOpen)}>{isOpen ? "▲" : "▼"}</button>
            </div>
            {isOpen && <div className="w-full m-4">
                <ul>
                    {itemCards?.map((item) => (
                        <ListItem key={item?.card?.info?.id} item={item?.card?.info} />
                    ))}
                </ul>
            </div>}
        </div>
    );
}
export default RestaurantCategory;