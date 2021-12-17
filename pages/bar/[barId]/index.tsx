import { Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Bar from "../../../components/Bar/Bar";
import Header from "../../../components/Header";
import Loading from "../../../components/Loading";
import {
  addDrinkToBar,
  deleteDrinkForBar,
  getBar,
  getDrinks,
} from "../../../supabase/bars";
import { BarType, DrinkType } from "../../../types/new";

const RoutedBarPage = () => {
  const router = useRouter();
  const { barId } = router.query;

  if (!barId || Array.isArray(barId)) {
    return <Spinner />;
  }

  return <GetBarPage barId={barId} />;
};

export default RoutedBarPage;

const GetBarPage = (props: { barId: string }) => {
  const { barId } = props;
  const [bar, setBar] = useState<BarType>();
  const [allDrinks, setAllDrinks] = useState<DrinkType[]>([]);

  useEffect(() => {
    getBar(Number(barId)).then((result) => {
      if (result.data && result.data[0]) {
        setBar(result.data[0]);
      }

      getDrinks().then((result) => {
        if (result.data) {
          setAllDrinks(result.data);
        }
      });
    });
  }, [barId]);

  if (!bar) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <BarPageWithBar bar={bar} allDrinks={allDrinks} />
    </>
  );
};

const BarPageWithBar = (props: { bar: BarType; allDrinks: DrinkType[] }) => {
  const { bar, allDrinks } = props;

  const removeDrink = (drinkId: number) => {
    deleteDrinkForBar(drinkId, bar.id);
  };

  const addDrink = (drinkId: number) => {
    addDrinkToBar(bar.id, drinkId);
  };

  return (
    <Bar
      bar={bar}
      removeDrink={removeDrink}
      allDrinks={allDrinks}
      addDrink={addDrink}
    />
  );
};
