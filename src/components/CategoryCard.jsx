function CategoryCard({ image, title, restaurants }) {
  return (
    <div className="category-card">
      <div
        className="category-img"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="category-info">
        <h3>{title}</h3>
        <p>{restaurants} Restaurants</p>
      </div>
    </div>
  );
}

export default CategoryCard;
