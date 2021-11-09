import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import Header from "../../../components/Header";

const AddIngredientPage: NextPage = () => {
  const router = useRouter();
  const { barId } = router.query;

  return (
    <>
      <Header />
      <p>Add ingredient to bar: {barId}</p>
    </>
  );
};

export default AddIngredientPage;
