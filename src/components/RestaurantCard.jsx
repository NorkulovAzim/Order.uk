function RestaurantCard({ image, name }) {
  return (
    <div className="restaurant-card">
      <div
        className="restaurant-img"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="restaurant-name">
        <p>{name}</p>
      </div>
    </div>
  );
}

export default RestaurantCard;
