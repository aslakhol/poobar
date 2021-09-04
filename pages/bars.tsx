import React from "react";
import type { NextPage } from "next";
import Header from "../components/Header";
import EntityList from "../components/EntityList/EntityList";

const Bars: NextPage = () => {
  const bars = [
    { name: "Den Gode Nabo", id: 1 },
    { name: "Brix Brygghus", id: 2 },
    { name: "Lervig Local", id: 3 },
  ];

  return (
    <>
      <Header />
      <EntityList entities={bars} type={"bar"} />
    </>
  );
};

export default Bars;
