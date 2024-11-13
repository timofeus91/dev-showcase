import React, { FC } from "react";
import style from "./AppLayout.module.css";
import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";

type TAppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout: FC<TAppLayoutProps> = ({ children }) => (
  <div className={style.app}>
    <Header />
    <main className={style.main}>{children}</main>
    <Footer />
  </div>
);

export default AppLayout;
