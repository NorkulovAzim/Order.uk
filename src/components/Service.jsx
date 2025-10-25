import Box1 from "../assets/service1.svg";
import Box2 from "../assets/service2.svg";

const Service = () => {
  return (
    <section className="service-section">
      <div className="container box-wrap">
        <div className=" box1" style={{ backgroundImage: `url(${Box1})` }}>
          <div className="box-text-1">
            <p>Earn more with lower fees</p>
          </div>

          <div className="box-content">
            <p>Signup as a business</p>
            <h2>Partner with us</h2>
            <a href="">Get Started</a>
          </div>
        </div>

        <div className=" box2" style={{ backgroundImage: `url(${Box2})` }}>
          <div className="box-text-1  ">
            <p>Avail exclusive perks</p>
          </div>

          <div className="box-content">
            <p>Signup as a business</p>
            <h2>Partner with us</h2>
            <a href="">Get Started</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
