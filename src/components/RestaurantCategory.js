import ListItem, {ListItemWithAddButton} from "./listItem";

const RestaurantCategory = (props) => {
    const { category, index, setShowIndex, showIndex } = props;
    const { title, itemCards } = category;
    const isOpen = showIndex === index;

    return (
        <div className="w-full my-4 p-4 justify-center">
            <div className="flex flex-row w-1/2 justify-between">
                <div><h2 className="font-bold">{title} ({itemCards?.length})</h2></div>
                <button className="text-gray-600 font-bold" onClick={() => isOpen ? setShowIndex(null) : setShowIndex(index)}>{isOpen ? "▲" : "▼"}</button>
            </div>
            {isOpen && <div className="w-full m-4 justify-center">
                <ul>
                    {itemCards?.map((item) => (
                        <ListItemWithAddButton key={item?.card?.info?.id} item={item?.card?.info} />
                    ))}
                </ul>
            </div>}
        </div>
    );
}
export default RestaurantCategory;