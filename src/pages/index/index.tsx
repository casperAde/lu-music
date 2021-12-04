import React, { FC, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "@/assets/scss/index.module.scss";
import { getBannerRequest } from "@/services/comment";
import { Button } from "antd-mobile";

const Index: FC = () => {
  useEffect(() => {
    getBannerRequest().then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <>
      <Button>按钮</Button>
      <nav className={styles.navWrapper}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/rank">Rank</NavLink>
          </li>
          <li>
            <NavLink to="/recommend">Recommend</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Index;
