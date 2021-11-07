import React from "react";
import type { NextPage } from "next";
import Header from "../../components/Header";
import EntityList from "../../components/EntityList/EntityList";
import ErrorOrNot from "../../components/ErrorOrNot";
import Loading from "../../components/Loading";
import { useDrinks } from "../../supabase/drinks";

const Drinks: NextPage = () => {
  const [{ data, error }] = useDrinks();
  return (
    <>
      <Header />
      {data ? <EntityList entities={data} type={"drink"} /> : <Loading />}
      <ErrorOrNot error={error} />
    </>
  );
};

export default Drinks;
