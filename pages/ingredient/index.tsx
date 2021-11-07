import React from "react";
import type { NextPage } from "next";
import Header from "../../components/Header";
import EntityList from "../../components/EntityList/EntityList";
import ErrorOrNot from "../../components/ErrorOrNot";
import Loading from "../../components/Loading";
import { useIngredients } from "../../supabase/supaHooks";

const Ingredients: NextPage = () => {
  const [{ data, error }] = useIngredients();

  return (
    <>
      <Header />
      {data ? <EntityList entities={data} type={"ingredient"} /> : <Loading />}
      <ErrorOrNot error={error} />
    </>
  );
};

export default Ingredients;
