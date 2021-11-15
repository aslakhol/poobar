import React, { useState } from "react";
import { BarType } from "../../types/types";
import BarNav from "./BarNav";
import DrinkList from "./DrinkList";

type Props = {
  bar: BarType;
};

const Bar = (props: Props) => {
  const { bar } = props;

  const [addingDrinks, setAddingDrinks] = useState(false);
  const [addingIngredients, setAddingIngredients] = useState(false);

  const toggleAddingDrinks = () => {
    setAddingDrinks((prev) => !prev);
    setAddingIngredients(false);
  };

  const toggleAddingIngredients = () => {
    setAddingIngredients((prev) => !prev);
    setAddingDrinks(false);
  };

  return (
    <>
      <BarNav
        barId={bar.id}
        onAddDrink={() => toggleAddingDrinks()}
        onAddIngredient={() => toggleAddingIngredients()}
      />
      <AddDrink display={addingDrinks} />
      <AddIngredient display={addingIngredients} />
      <DrinkList drinks={bar.drink} type={"drink"} />
    </>
  );
};

export default Bar;

const AddDrink = (props: { display: boolean }) => {
  const { display } = props;

  if (!display) return null;

  return <div>Add Drink</div>;
};

const AddIngredient = (props: { display: boolean }) => {
  const { display } = props;

  if (!display) return null;

  return <div>Add Ingredient</div>;
};
