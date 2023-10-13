import "./Header.css";
import logo from "../../assets/fashion-store-logo.png";
import { FaSignInAlt, FaUserPlus, FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="logo">
          <img src={logo} alt="Fashion Store" />
        </div>
        <div className="navigation">
          <ul>
            <li>
              <a href="#" title="Home">
                Home
              </a>
            </li>
            <li>
              <a href="#" title="Products">
                Products
              </a>
            </li>
            <li>
              <a href="#" title="About">
                About
              </a>
            </li>
            <li>
              <a href="#" title="Contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="secondary-navigation">
          <ul>
            <li>
              <a href="#" title="Login">
                <FaSignInAlt /> Login
              </a>
            </li>
            <li>
              <a href="#" title="Register">
                <FaUserPlus /> Register
              </a>
            </li>
            <li>
              <a href="#" title="Cart">
                <FaShoppingCart /> Cart
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;