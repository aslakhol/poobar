import { Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import bar from "..";
import Bar from "../../../components/Bar/Bar";
import Header from "../../../components/Header";
import Loading from "../../../components/Loading";
import {
  addDrinkToBar,
  deleteDrinkForBar,
  useBar,
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

  useEffect(() => {
    useBar(Number(barId)).then((result) => {
      if (result.data && result.data[0]) {
        setBar(result.data[0]);
      }
    });
  }, [barId]);

  return (
    <>
      <Header />
      {bar ? <BarPageWithBar bar={bar} /> : <Loading />}
    </>
  );
};

const BarPageWithBar = (props: { bar: BarType }) => {
  const { bar } = props;
  const [allDrinks, setAllDrinks] = useState<DrinkType[]>([]);

  useEffect(() => {
    useDrinksNew().then((result) => {
      if (result.data) {
        setAllDrinks(result.data);
      }
    });
  }, []);

  const removeDrink = (drinkId: number) => {
    deleteDrinkForBar(drinkId, bar.id);
  };

  const addDrink = (drinkId: number) => {
    addDrinkToBar(bar.id, drinkId);
  };

  return (
    <>
      <Header />
      {bar ? (
        <Bar
          bar={bar}
          removeDrink={removeDrink}
          allDrinks={allDrinks}
          addDrink={addDrink}
        />
      ) : (
        <Loading />
      )}
    </>
  );
};
