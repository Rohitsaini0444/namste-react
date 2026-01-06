import { LOGO_URL } from "../../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const HeaderComponent = () => {
    const [loginButton, setLogin] = useState('Login');
    const onlineStatus = useOnlineStatus() ? "🟢 Online" : "🔴 Offline";
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
                    {/* <li key="cart"><Link to="/cart">Cart</Link></li> */}
                </ul>
                <button className="login-btn" onClick={() => setLogin(loginButton === 'Login' ? 'Logout' : 'Login')}>{loginButton}</button>
            </div>
        </div>
    );
}
export default HeaderComponent;