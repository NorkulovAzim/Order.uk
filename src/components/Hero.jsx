const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p>Order Restaurant food, takeaway and groceries.</p>
            <h2>Feast Your Senses,Fast and Fresh</h2>
            <span>Enter a postcode to see what we deliver</span>
            <div className="hero-btn">
              <input type="text" placeholder="e.g. EC4R 3TE" />
              <button>Search</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
