import { Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import BarNav from "../../../components/BarNav";
import EntityList from "../../../components/EntityList/EntityList";
import ErrorOrNot from "../../../components/ErrorOrNot";
import Header from "../../../components/Header";
import Loading from "../../../components/Loading";
import { useBar } from "../../../supabase/bars";
import { Bar } from "../../../types/types";

const RoutedBarPage = () => {
  const router = useRouter();
  const { barId } = router.query;

  if (!barId || Array.isArray(barId)) return <Spinner />;

  return <BarPage barId={barId} />;
};

export default RoutedBarPage;

const BarPage = (props: { barId: string }) => {
  const { barId } = props;
  const [bar, setBar] = useState<Bar>();

  const [{ data, error }] = useBar(barId);

  useEffect(() => {
    if (data && data[0]) setBar(data[0]);
    console.log(data);
  }, [data]);

  return (
    <>
      <Header />
      <BarNav barId={barId} />
      {bar ? <EntityList entities={bar.drink} type={"drink"} /> : <Loading />}
      <ErrorOrNot error={error} />
    </>
  );
};
