import Box1 from "../assets/box1.png";
import Box2 from "../assets/box2.png";
import Box3 from "../assets/box3.png";

const Deals = () => {
  return (
    <section className="deals-section">
      <div className="container">
        <div className="deals-top">
          <h2>Up to -40% 🎊 Order.uk exclusive deals</h2>

          <div className="deals-btn">
            <a href="#">Vegan</a>
            <a href="#">Sushi</a>
            <a href="#">Pizza & Fast food</a>
            <a href="#">Others</a>
          </div>
        </div>

        <div className="deals-wrap">
          <div className="deals-bottom">
            <div
              className="deals-box"
              style={{ backgroundImage: `url(${Box1})` }}
            >
              <div className="deals-content">
                <p>Restaurant</p>
                <h2>Chef Burgers London</h2>
              </div>
            </div>
          </div>

          <div className="deals-bottom">
            <div
              className="deals-box"
              style={{ backgroundImage: `url(${Box2})` }}
            >
              <div className="deals-content">
                <p>Restaurant</p>
                <h2>Grand Ai Cafe London</h2>
              </div>
            </div>
          </div>

          <div className="deals-bottom">
            <div
              className="deals-box"
              style={{ backgroundImage: `url(${Box3})` }}
            >
              <div className="deals-content">
                <p>Restaurant</p>
                <h2>Butterbrot Caf’e London</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deals;
