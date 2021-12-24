import { Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import Bar from "../../../components/Bar/Bar";
import Header from "../../../components/Header";
import Loading from "../../../components/Loading";
import {
  addDrinkToBar,
  deleteDrinkForBar,
  useBar,
} from "../../../supabase/bars";
import { useDrinks } from "../../../supabase/drinks";
import { BarType, DrinkType } from "../../../types/types";

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
  const { bar } = useBar(Number(barId));
  const { drinks } = useDrinks();

  if (!bar || !drinks.length) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <BarPage bar={bar} allDrinks={drinks} />
    </>
  );
};

const BarPage = (props: { bar: BarType; allDrinks: DrinkType[] }) => {
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
