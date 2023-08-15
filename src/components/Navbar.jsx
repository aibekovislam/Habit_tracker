import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__items}>
        <div className={styles.navbar__item}>
          <div className={styles.logo}>TMI Tracker</div>
        </div>
        <div className={styles.navbar__item}>
          <ul className={styles.navigation}>
            <li>Home</li>
            <li>Products</li>
            <li>Serives</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className={styles.navbar__item}>
          <button>Explore App</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
