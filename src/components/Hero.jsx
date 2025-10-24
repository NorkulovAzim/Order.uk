import Hero1 from "../assets/hero1.svg";
import Hero2 from "../assets/herobg.svg";
import Order from "../assets/order.png";
import Logo2 from "../assets/LOGO2.svg";
import One from "../assets/One.svg";
import Two from "../assets/Two.svg";
import Three from "../assets/Three.svg";
const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p>Order Restaurant food, takeaway and groceries.</p>
            <h2>
              Feast Your Senses,
              <br />
              <span>Fast and Fresh</span>
            </h2>
            <b>Enter a postcode to see what we deliver</b>
            <div className="hero-btn">
              <input type="text" placeholder="e.g. EC4R 3TE" />
              <button>Search</button>
            </div>
          </div>
          <div className="hero-img">
            <img className="hero-img1" src={Hero1} alt="hero" />
            <img className="hero-img2" src={Hero2} alt="hero" />
          </div>

          <div className="hero-order">
            <img src={Order} alt="order" />

            <div className="first-order order-box">
              <div className="order-icon">
                <p>now</p>
              </div>
              <b>We’ve Received your order!</b>
              <p>Awaiting Restaurant acceptance</p>
              <img src={One} alt="" />
            </div>

            <div className="second-order order-box">
              <div className="order-icon">
                <p>now</p>
              </div>
              <b>Order Accepted!</b>
              <p>Your order will be delivered shortly</p>
              <img src={Two} alt="" />
            </div>

            <div className="third-order order-box">
              <div className="order-icon">
                <p>now</p>
              </div>
              <b>Your order is on the way!</b>
              <p>Driver is delivering your meal</p>
              <img src={Three} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
