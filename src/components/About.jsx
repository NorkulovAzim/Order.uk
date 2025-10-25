import Order from "../assets/order-food.svg";
import Food from "../assets/food.svg";
import Mobile from "../assets/order.svg";

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-box">
          <div className="about-title">
            <h2>Know more about us!</h2>

            <div className="about-line">
              <a href="#">Frequent Questions</a>
              <a href="#">Who we are?</a>
              <a href="#">Partner Program</a>
              <a href="#">Help & Support</a>
            </div>
          </div>

          <div className="about-faq">
            <div className="faq-box">
              <a href="#">How does Order.UK work?</a>
              <a href="#">What payment methods are accepted?</a>
              <a href="#">Can I track my order in real-time?</a>
              <a href="#">
                Are there any special discounts orpromotions available?
              </a>
              <a href="#">Is Order.UK available in my area?</a>
            </div>

            <div className="faq-cards">
              <div className="faq-card">
                <p>Place an Order!</p>
                <img src={Order} alt="" />
                <span>Place order through ourwebsite or Mobile app</span>
              </div>

              <div className="faq-card">
                <p>Track Progress!</p>
                <img src={Food} alt="" />
                <span>Your can track your orderstatus with delivery time</span>
              </div>

              <div className="faq-card">
                <p>Place an Order!</p>
                <img src={Mobile} alt="" />
                <span>Place order through ourwebsite or Mobile app</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
