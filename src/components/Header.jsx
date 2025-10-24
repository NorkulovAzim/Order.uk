import StarImg from "../assets/star.png";
import Location from "../assets/location.png";
import Basket from "../assets/Basket.png";
import ForwardBtn from "../assets/ForwardBtn.png";
import Logo from "../assets/Logo.svg";
import User from "../assets/User.svg";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="footer-top">
          <div className="promo">
            <p>
              <img src={StarImg} alt="" /> Get 5% Off your first order,{" "}
              <span>Promo: ORDER5</span>
            </p>
          </div>

          <div className="address">
            <img src={Location} alt="" />
            <p>Regent Street, A4, A4201, London</p>
            <a href="#">Change Location</a>
          </div>

          <div className="footer-buttons">
            <a href="#">
              <img src={Basket} alt="" />
            </a>
            <a href="#">23 Items</a>
            <a href="#">GBP 79.89</a>
            <a href="">
              <img src={ForwardBtn} alt="" />
            </a>
          </div>
        </div>

        <div className="navbar">
          <div className="logo">
            <a href="#">
              <img src={Logo} alt="" />
            </a>
          </div>

          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">Browse Menu</a>
            <a href="#">Special Offers</a>
            <a href="#">Restaurants</a>
            <a href="#">Track Order</a>
          </div>

          <div className="login">
            <a href="#">
              <img src={User} alt="" />
              Login / Sign Up
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
