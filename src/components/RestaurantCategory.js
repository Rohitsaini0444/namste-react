import ListItem from "./listItem";

const RestaurantCategory = (props) => {
    const { category, index, setShowIndex, showIndex } = props;
    const { title, itemCards } = category;
    const isOpen = showIndex === index;

    return (
        <div className="w-full my-4 p-4">
            <div className="flex flex-row w-1/2 justify-between">
                <div><h2 className="font-bold">{title} ({itemCards?.length})</h2></div>
                <button className="text-gray-600 font-bold" onClick={() => isOpen ? setShowIndex(null) : setShowIndex(index)}>{isOpen ? "▲" : "▼"}</button>
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