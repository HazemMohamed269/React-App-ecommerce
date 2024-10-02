import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
import { motion } from "framer-motion";
function ExploreMenu({ category, setCategory }) {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        Eat A Lot, And The Price Is Reasonable
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                staggerChildren: 1,
                delay: (index + 1) * 0.1,
                // delay: stagger(1),
              }}
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </motion.div>
          );
        })}
      </div>
      <hr />
    </div>
  );
}

export default ExploreMenu;
