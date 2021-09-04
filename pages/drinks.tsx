import React from "react";
import type { NextPage } from "next";
import Header from "../components/Header";
import EntityList from "../components/EntityList/EntityList";

const Drinks: NextPage = () => {
  const drinks = [
    { name: "Manhattan", id: 1 },
    { name: "Negroni", id: 2 },
    { name: "Sidecar", id: 3 },
  ];

  return (
    <>
      <Header />
      <EntityList entities={drinks} type={"drink"} />
    </>
  );
};

export default Drinks;
