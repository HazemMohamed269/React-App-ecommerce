import { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../Context/StoreContext";
import Fooditem from "../Fooditem/Fooditem";
import { motion } from "framer-motion";

function FoodDisplay({ category }) {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishes Near You</h2>
      <motion.div
        className="food-display-list"
      >
        {food_list.map((item, index) => {
          {
            console.log(category, item.category);
          }
          if (category === "All" || category === item.category) {
            return (
              <Fooditem
                key={index}
                index={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </motion.div>
    </div>
  );
}

export default FoodDisplay;
