import React from "react";
import styles from "./Section3.module.css";

function Section3() {
  return (
    <div className={styles.section3}>
      <div className={styles.section3__items}>
        <div className={styles.section3__item}>
          <div className={styles.main__block}>
            <div
              className={styles.small__block2_tag}
              style={{
                color: "white",
                fontSize: "23px",
                left: "50px",
                top: "50px",
              }}
            >
              OUR PRODUCT
            </div>
            <div
              className={styles.small__block2_title}
              style={{
                color: "white",
                bottom: "235px",
                width: "300px",
                left: "50px",
                zIndex: "3",
              }}
            >
              Become Self-aware
            </div>
            <div
              className={styles.button_block}
              style={{
                bottom: "170px",
                left: "50px",
                background: "black",
                color: "white",
                padding: "10px 20px",
              }}
            >
              How it works
            </div>
            <div className={styles.infinity}></div>
            <div className={styles.infinity2}></div>
            <div className={styles.infinity3}></div>
            <img
              src="https://static.vecteezy.com/system/resources/previews/020/696/231/original/3d-minimal-self-development-concept-self-learning-concept-reading-a-book-to-get-a-new-idea-knowledge-seeking-textbook-with-a-light-bulb-3d-rendering-illustration-png.png"
              className={styles.selfImprove}
            />
          </div>
        </div>
        <div className={styles.section3__item}>
          <div className={styles.section3_blocks}>
            <div className={styles.big__block}>
              <div
                className={styles.small__block2_tag}
                style={{ color: "white", fontSize: "23px" }}
              >
                ADAPTABILITY
              </div>
              <div
                className={styles.small__block2_title}
                style={{ color: "white", bottom: "70px" }}
              >
                Features
              </div>
              <div className={styles.button_block}>Explore App</div>
              <img
                src="https://parspng.com/wp-content/uploads/2023/06/watchpng.parspng.com-9.png"
                className={styles.apple_watch}
              />
              <div className={styles.flower}></div>
            </div>
            <div className={styles.small__blocks}>
              <div className={styles.small__block}>
                <div
                  className={styles.small__block2_tag}
                  style={{ color: "white" }}
                >
                  OUR PRODUCTS
                </div>
                <div
                  className={styles.small__block2_title}
                  style={{ color: "white" }}
                >
                  SaaS
                </div>
                <div className={styles.cloud}></div>
              </div>
              <div className={styles.small__block2}>
                <div className={styles.small__block2_tag}>
                  COMMUINITY & SUPPORT
                </div>
                <div className={styles.small__block2_title}>Join us</div>
                <div className={styles.four_pointed_star}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
