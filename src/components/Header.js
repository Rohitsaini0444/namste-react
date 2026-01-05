import { LOGO_URL } from "../../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const HeaderComponent = () => {
    const [loginButton, setLogin] = useState('Login');
    const onlineStatus = useOnlineStatus() ? "🟢 Online" : "🔴 Offline";
    return (
        <div className="header">
            <div className="logo-container">
                <img src={`${LOGO_URL}`} alt="logo" className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status: {onlineStatus}</li>
                    <li key="home"><Link to="/">Home</Link></li>
                    <li key="about"><Link to="/about">About</Link></li>
                    <li key="contact"><Link to="/contact">Contact</Link></li>
                    <li key="grocery"><Link to="/grocery">Grocery</Link></li>
                    {/* <li key="cart"><Link to="/cart">Cart</Link></li> */}
                </ul>
                <button className="login-btn" onClick={() => setLogin(loginButton === 'Login' ? 'Logout' : 'Login')}>{loginButton}</button>
            </div>
        </div>
    );
}
export default HeaderComponent;