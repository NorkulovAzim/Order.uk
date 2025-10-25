import RestaurantCard from "./RestaurantCard";
import McDonalds from "../assets/mcdonalds.png";
import PapaJohns from "../assets/papajohns.png";
import KFC from "../assets/kfc.png";
import Texas from "../assets/texas.png";
import BurgerKing from "../assets/burgerking.png";
import Shaurma from "../assets/shaurma.png";

const Restaurants = () => {
  const restaurants = [
    { image: McDonalds, name: "McDonald’s London" },
    { image: PapaJohns, name: "Papa Johns" },
    { image: KFC, name: "KFC West London" },
    { image: Texas, name: "Texas Chicken" },
    { image: BurgerKing, name: "Burger King" },
    { image: Shaurma, name: "Shaurma 1" },
  ];

  return (
    <section className="restaurants-section">
      <div className="container">
        <div className="restaurants-header">
          <h2>Popular Restaurants</h2>
        </div>

        <div className="restaurants-container">
          {restaurants.map((item, index) => (
            <RestaurantCard key={index} image={item.image} name={item.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Restaurants;
