import React from "react";
import type { NextPage } from "next";
import Header from "../components/Header";
import EntityList from "../components/EntityList/EntityList";

const Ingredients: NextPage = () => {
  const ingredients = [
    { name: "Gin", id: 1 },
    { name: "Tonic", id: 2 },
    { name: "Lemon slice", id: 3 },
  ];

  return (
    <>
      <Header />
      <EntityList entities={ingredients} type={"ingredient"} />
    </>
  );
};

export default Ingredients;
