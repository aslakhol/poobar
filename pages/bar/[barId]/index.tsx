import { Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Bar from "../../../components/Bar/Bar";
import ErrorOrNot from "../../../components/ErrorOrNot";
import Header from "../../../components/Header";
import Loading from "../../../components/Loading";
import { useBar, useDeleteDrinkForBar } from "../../../supabase/bars";
import { BarType } from "../../../types/types";

const RoutedBarPage = () => {
  const router = useRouter();
  const { barId } = router.query;

  if (!barId || Array.isArray(barId)) return <Spinner />;

  return <BarPage barId={barId} />;
};

export default RoutedBarPage;

const BarPage = (props: { barId: string }) => {
  const { barId } = props;
  const [bar, setBar] = useState<BarType>();

  const [{ data, error }] = useBar(barId);
  const [{}, execute] = useDeleteDrinkForBar();

  const removeDrink = (drinkId: string) => {
    execute((query) => query.eq("drink_id", drinkId).eq("bar_id", barId));
  };

  useEffect(() => {
    if (data && data[0]) {
      setBar(data[0]);
      console.log(data[0]);
    }
  }, [data]);

  return (
    <>
      <Header />
      {bar ? <Bar bar={bar} removeDrink={removeDrink} /> : <Loading />}
      <ErrorOrNot error={error} />
    </>
  );
};
