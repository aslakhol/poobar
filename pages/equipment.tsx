import React from "react";
import type { NextPage } from "next";
import Header from "../components/Header";
import EntityList from "../components/EntityList/EntityList";

const Equipment: NextPage = () => {
  const equipment = [
    { name: "Muddler", id: 1 },
    { name: "Shaker", id: 2 },
    { name: "Strainer", id: 3 },
  ];

  return (
    <>
      <Header />
      <EntityList entities={equipment} type={"equipment"} />
    </>
  );
};

export default Equipment;
