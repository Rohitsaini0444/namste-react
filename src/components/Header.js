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
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
                <button className="login-btn" onClick={() => setLogin(loginButton === 'Login' ? 'Logout' : 'Login')}>{loginButton}</button>
            </div>
        </div>
    );
}
export default HeaderComponent;