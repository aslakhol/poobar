import React from "react";
import type { NextPage } from "next";
import Header from "../components/Header";
import EntityList from "../components/EntityList/EntityList";
import { useSelect } from "react-supabase";
import ErrorOrNot from "../components/ErrorOrNot";
import Loading from "../components/Loading";

const Ingredients: NextPage = () => {
  const [{ data, error }] = useSelect("ingredient", {
    columns: "id, name",
  });

  return (
    <>
      <Header />
      {data ? <EntityList entities={data} type={"ingredient"} /> : <Loading />}
      <ErrorOrNot error={error} />
    </>
  );
};

export default Ingredients;
