import React from "react";
import type { NextPage } from "next";
import Header from "../../components/Header";
import EntityList from "../../components/EntityList/EntityList";
import ErrorOrNot from "../../components/ErrorOrNot";
import Loading from "../../components/Loading";
import { useBars } from "../../utils/supaHooks";

const Bars: NextPage = () => {
  const [{ data, error }] = useBars();

  return (
    <>
      <Header />
      {data ? <EntityList entities={data} type={"bar"} /> : <Loading />}
      <ErrorOrNot error={error} />
    </>
  );
};

export default Bars;
