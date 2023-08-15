import React from "react";
import styles from "./Section2.module.css";
import { ReactComponent as GooglePlay } from "../assets/SVG_images/google-play-badge-logo-svgrepo-com.svg";
import { ReactComponent as AppStore } from "../assets/SVG_images/download-on-the-app-store-apple-logo-svgrepo-com.svg";

function Section2() {
  return (
    <div className={styles.section2}>
      <div className={styles.section2__items}>
        <div className={styles.section2__item}>
          <div className={styles.typography__block}>
            <div className={styles.typography__title}>
              Build Good
              <br /> Habits
            </div>
            <div className={styles.typography__text}>
              Analyze your activities and focus on those, that make your
              happier.
            </div>
            <div className={styles.typography__buttons}>
              <GooglePlay className={styles.SVG_image} />
              <AppStore className={styles.SVG_image} />
            </div>
          </div>
        </div>
        <div className={styles.section2__item}>
          <img src="https://static.vecteezy.com/system/resources/previews/009/584/385/original/3d-illustration-statistics-suitable-for-business-and-finance-png.png" />
          <div className={styles.coloredBlock}></div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
