import React from "react";
import Header from "../Header";
import Banner from "../Banner";
import Footer from "../Footer";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Provider;
