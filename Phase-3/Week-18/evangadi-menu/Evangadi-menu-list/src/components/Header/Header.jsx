import { Component } from "react";
import styles from "./Header.module.css";

class Header extends Component {
  render() {
    return (
      <div>
        {/* <!-- header start  --> */}
        <header className={styles.title}>
          <h1>Evangadi Menu</h1>
          <div></div>
        </header>
        {/* <!-- header end  --> */}
      </div>
    );
  }
}

export default Header;
