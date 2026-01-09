import { LOGO_URL } from "../../utils/constants";
import { useState, useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/userContext";
import { useSelector } from "react-redux";

const HeaderComponent = () => {
    const [loginButton, setLogin] = useState('Login');
    const onlineStatus = useOnlineStatus() ? "🟢 Online" : "🔴 Offline";
    const { loggedInUser } = useContext(UserContext);
    const cartItems = useSelector((store) => store.cart.items);
    return (
        <div className="flex justify-between bg-pink-50 shadow-lg ">
            <div className="w-28">
                <img src={`${LOGO_URL}`} alt="logo" className="w-full" />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status: {onlineStatus}</li>
                    <li key="home" className="px-4"><Link to="/">Home</Link></li>
                    <li key="about" className="px-4"><Link to="/about">About</Link></li>
                    <li key="contact" className="px-4"><Link to="/contact">Contact</Link></li>
                    <li key="grocery" className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li key="cart" className="px-4"><Link to="/cart">Cart ({cartItems.length})</Link></li>
                </ul>
                <button className="login-btn" onClick={() => setLogin(loginButton === 'Login' ? 'Logout' : 'Login')}>{loginButton}</button>
                <div className="font-bold p-2">{loggedInUser}</div>
            </div>
        </div>
    );
}
export default HeaderComponent;