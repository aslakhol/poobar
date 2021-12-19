import React from "react";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import { deleteDrink, useDrinks } from "../../supabase/drinks";
import DrinksList from "../../components/Drink/DrinksList";

const Drinks = () => {
  const { drinks, setDrinks } = useDrinks();

  const removeDrink = (id: number) => {
    deleteDrink(id);
  };

  if (!drinks) {
    return (
      <>
        <Header />
        <Loading />
      </>
    );
  }

  return (
    <>
      <Header />
      <DrinksList
        drinks={drinks}
        setDrinks={setDrinks}
        deleteDrink={removeDrink}
      />
    </>
  );
};

export default Drinks;
