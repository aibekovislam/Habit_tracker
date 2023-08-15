import React from "react";
import styles from "./HomePage.module.css";
import Section2 from "./Section2";
import Section3 from "./Section3";

function HomePage() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.hero__items}>
          <div className={styles.hero__item}>
            <div className={styles.titles}>
              <h1 className={styles.title}>
                The <span>AI app</span>, in your pocket
              </h1>
              <div className={styles.text}>
                Track your activity and get insights on how it works for your
                happiness.
              </div>
            </div>
          </div>
          <div className={styles.hero__item}>
            <button className={styles.download__button}>Download App</button>
            <a href="#" className={styles.forWeb__button}>
              Access from web
            </a>
          </div>
        </div>
      </div>
      <Section2 />
      <Section3 />
    </>
  );
}

export default HomePage;
