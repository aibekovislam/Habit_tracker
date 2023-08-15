import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import styles from "./Layout.module.css";

function MainLayout() {
  return (
    <div className={`${styles.layoutBlock} ${styles.container}`}>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default MainLayout;
