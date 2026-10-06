import { Component } from "react";
import styles from "./FoodItem.module.css";

import menu from "../../assets/data.js";
import SingleFood from "../SingleFood/SingleFood.jsx";

class FoodItem extends Component {
  render() {
    return (
      <div className={styles["foods-container"]}>
        {menu?.map((food, index) => {
          return <SingleFood key={index} {...food} />;
        })}
      </div>
    );
  }
}

export default FoodItem;
