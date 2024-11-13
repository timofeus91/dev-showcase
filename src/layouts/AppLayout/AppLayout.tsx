import React, { FC } from "react";
import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";

type TAppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout: FC<TAppLayoutProps> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default AppLayout;
