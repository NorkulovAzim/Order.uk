function Statistics() {
  const stats = [
    { number: "546+", label: "Registered Riders" },
    { number: "789,900+", label: "Orders Delivered" },
    { number: "690+", label: "Restaurants Partnered" },
    { number: "17,457+", label: "Food items" },
  ];

  return (
    <section className="stats-section">
      <div className="container">
      <div className="stats-container">
        {stats.map((item, index) => (
          <div key={index} className="stat-box">
            <h2>{item.number}</h2>
            <p>{item.label}</p>
            {index !== stats.length - 1 && <span className="divider"></span>}
          </div>
        ))}
      </div>
      </div>

    </section>
  );
}

export default Statistics;
