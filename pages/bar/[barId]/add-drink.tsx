import { useRouter } from "next/router";
import React from "react";
import Header from "../../../components/Header";

const AddDrinkPage = () => {
  const router = useRouter();
  const { barId } = router.query;

  return (
    <>
      <Header />
      <p>Add drink to bar: {barId}</p>
    </>
  );
};

export default AddDrinkPage;
