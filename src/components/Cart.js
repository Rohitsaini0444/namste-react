import ListItem from "../components/listItem";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../../utils/store/cart";
const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    };
    return (
        <div className="w-1/2 align-center m-4 p-4">
            <h1 className="my-2">CART ITEMS</h1>
            <button className="bg-red-500 p-2 m-2 rounded-md text-white font-bold" onClick={()=>handleClearCart()}>Clear Cart</button>
            {
            cartItems.map((item, index) => (
                <ListItem key={index} item={item} />
            ))
            }
        </div>
    );
}
export default Cart;