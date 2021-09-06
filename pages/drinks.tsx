import React from "react";
import type { NextPage } from "next";
import Header from "../components/Header";
import EntityList from "../components/EntityList/EntityList";
import { useSelect } from "react-supabase";
import ErrorOrNot from "../components/ErrorOrNot";
import Loading from "../components/Loading";

const Drinks: NextPage = () => {
  const [{ data, error }] = useSelect("drink", {
    columns: "id, name",
  });

  return (
    <>
      <Header />
      {data ? <EntityList entities={data} type={"drink"} /> : <Loading />}
      <ErrorOrNot error={error} />
    </>
  );
};

export default Drinks;
