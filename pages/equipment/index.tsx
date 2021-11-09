import React from "react";
import type { NextPage } from "next";
import Header from "../../components/Header";
import EntityList from "../../components/EntityList/EntityList";
import ErrorOrNot from "../../components/ErrorOrNot";
import Loading from "../../components/Loading";
import { useEquipments } from "../../supabase/equipment";

const Equipment: NextPage = () => {
  const [{ data, error }] = useEquipments();

  return (
    <>
      <Header />
      {data ? <EntityList entities={data} type={"equipment"} /> : <Loading />}
      <ErrorOrNot error={error} />
    </>
  );
};

export default Equipment;
