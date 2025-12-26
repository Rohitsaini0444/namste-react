import { LOGO_URL } from "../../utils/constants";
import { useState } from "react";

const HeaderComponent = () => {
    const [loginButton, setLogin] = useState('Login');
    return (
        <div className="header">
            <div className="logo-container">
                <img src={`${LOGO_URL}`} alt="logo" className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li key="home"><a href="/">Home</a></li>
                    <li key="about"><a href="/about">About</a></li>
                    <li key="contact"><a href="/contact">Contact</a></li>
                    <li key="cart"><a href="/cart">Cart</a></li>
                </ul>
                <button className="login-btn" onClick={() => setLogin(loginButton === 'Login' ? 'Logout' : 'Login')}>{loginButton}</button>
            </div>
        </div>
    );
}
export default HeaderComponent;