import { Component } from "react";

import styles from "./SingleFood.module.css"






class SingleFood extends Component {
  render() {
    // console.log(this.props)
    const { title,catergory,  price, img , desc,  } = this.props;
    return (
      <>
        {/* <!-- food item start --> */}
        <div className={styles["single-food"]}>
          <div className="img">
            <img src={img} />
          </div>
          <div className={styles["title-price"]}>
            <h3>{title}</h3>
            <p> {price}</p>
          </div>
          <div>{catergory}</div>
          <div className={styles["food-desc"]}>{desc}</div>
        </div>
        {/* <!-- food item end --> */}
      </>
    );
  }
}

export default SingleFood;
