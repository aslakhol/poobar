import React from "react";
import type { NextPage } from "next";
import Header from "../../components/Header";
import EntityList from "../../components/EntityList/EntityList";
import { useSelect } from "react-supabase";
import ErrorOrNot from "../../components/ErrorOrNot";
import Loading from "../../components/Loading";

const Equipment: NextPage = () => {
  const [{ data, error }] = useSelect("equipment", {
    columns: "id, name",
  });

  return (
    <>
      <Header />
      {data ? <EntityList entities={data} type={"equipment"} /> : <Loading />}
      <ErrorOrNot error={error} />
    </>
  );
};

export default Equipment;
