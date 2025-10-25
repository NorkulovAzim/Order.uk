import CategoryCard from "./CategoryCard";
import Burger from "../assets/burger.svg";
import Salad from "../assets/salad.svg";
import Pasta from "../assets/pasta.svg";
import Pizza from "../assets/pizza.svg";
import Breakfast from "../assets/breakfast.svg";
import Soup from "../assets/soup.svg";

function Categories() {
  const categories = [
    { image: Burger, title: "Burgers & Fast food", restaurants: 21 },
    { image: Salad, title: "Salads", restaurants: 32 },
    { image: Pasta, title: "Pasta & Casuals", restaurants: 4 },
    { image: Pizza, title: "Pizza", restaurants: 32 },
    { image: Breakfast, title: "Breakfast", restaurants: 4 },
    { image: Soup, title: "Soups", restaurants: 32 },
  ];

  return (
    <div className="categories-container">
      {categories.map((item, index) => (
        <CategoryCard
          key={index}
          image={item.image}
          title={item.title}
          restaurants={item.restaurants}
        />
      ))}
    </div>
  );
}

export default Categories;
