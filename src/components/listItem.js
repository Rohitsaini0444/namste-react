import { CDN_URL } from "../../utils/constants";

const ListItem = (props) => {
    console.log("props", props);
    const { name, description, price, imageId } = props.item;
    return (
        <div className="flex flex-row justify-between border-b-2 my-2 border-gray-200 w-1/2">
            <div className="flex flex-col justify-start">
                {/* {isVeg ? <div className="veg-indicator">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8" cy="8" r="8" fill="#008000" />
                    </svg>
                </div> : <div className="non-veg-indicator">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8" cy="8" r="8" fill="#FF0000" />
                    </svg>
                </div>} */}
                <h3 className="font-bold">{name}</h3>
                <h4 className="item-price">Price: ₹{price / 100}</h4>
                {/* <h4 className="rating">{props.avgRating}</h4> */}
                <p className="text-gray-600">{description}</p>
            </div>
            <div className="relative flex justify-center items-center">
                <button className="absolute bottom-0 bg-white text-green-600 fill-green-600 font  text-center px-4 rounded-md font-bold">Add+</button>
                <img src={`${CDN_URL}${imageId}`} className="w-24 h-24 object-cover rounded-lg" alt="Item Image" />
            </div>
        </div>
    );
}
export default ListItem;