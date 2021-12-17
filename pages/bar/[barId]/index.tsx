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
        console.log(result.data[0], "slkjaslk");
      }
    });

    useDrinksNew().then((result) => {
      if (result.data) {
        setAllDrinks(result.data);
        console.log(result.data);
      }
    });
  }, [barId]);

  const removeDrink = (drinkId: number) => {
    if (bar) {
      useDeleteDrinkForBar(drinkId, bar.id).then(console.log);
    }
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
