import React from "react";
import type { NextPage } from "next";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import { useBars } from "../../supabase/bars";
import BarsList from "../../components/Bar/BarsList";

const Bars: NextPage = () => {
  const { bars } = useBars();

  if (!bars) {
    return (
      <>
        <Header />
        <Loading />;
      </>
    );
  }

  return (
    <>
      <Header />
      <BarsList bars={bars} />
    </>
  );
};

export default Bars;
