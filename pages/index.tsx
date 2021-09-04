import React from "react";
import type { NextPage } from "next";
import Header from "../components/Header";
import BarList from "../components/bar/BarList";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <BarList />
    </>
  );
};

export default Home;
