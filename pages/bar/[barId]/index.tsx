import { Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Bar from "../../../components/Bar/Bar";
import Header from "../../../components/Header";
import Loading from "../../../components/Loading";
import {
  useAddDrinkToBar,
  useBar,
  useDeleteDrinkForBar,
  useDrinksNew,
} from "../../../supabase/bars";
import { BarType, DrinkType } from "../../../types/new";

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
  const [allDrinks, setAllDrinks] = useState<DrinkType[]>([]);

  useEffect(() => {
    useBar(barId).then((result) => {
      if (result.data && result.data[0]) {
        setBar(result.data[0]);
      }
    });

    useDrinksNew().then((result) => {
      if (result.data) {
        setAllDrinks(result.data);
      }
    });
  }, [barId]);

  const [{}, execute] = useDeleteDrinkForBar();

  const removeDrink = (drinkId: number) => {
    execute((query) => query.eq("drink_id", drinkId).eq("bar_id", barId));
  };

  const addDrinkToBar = (drinkId: number) => {
    if (bar) {
      useAddDrinkToBar(bar.id, drinkId);
    }
  };

  return (
    <>
      <Header />
      {bar ? (
        <Bar
          bar={bar}
          removeDrink={removeDrink}
          allDrinks={allDrinks}
          addDrink={addDrinkToBar}
        />
      ) : (
        <Loading />
      )}
    </>
  );
};
