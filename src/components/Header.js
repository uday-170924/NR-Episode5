import { LOGO_URL } from "../../utils/constants";
const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img
          src={LOGO_URL}
            className="logo"
            alt="logo"
          />
        </div>
        <div className="links-container">
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
            <li>
              <a>Cart</a>
            </li>
          </ul>
        </div>
      </div>
    );
  };

export default Header;