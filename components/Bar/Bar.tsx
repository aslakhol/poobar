import { Center } from "@chakra-ui/layout";
import { UseComboboxStateChange } from "downshift";
import React, { useMemo, useState } from "react";
import { BarDrink, BarType, DrinkType } from "../../types/types";
import BarNav from "./BarNav";
import ComboBox from "./ComboBox";
import DrinkList from "./DrinkList";

type Props = {
  bar: BarType;
  removeDrink: (drinkId: string) => void;
  allDrinks: DrinkType[];
  addDrink: (drinkId: string) => void;
};

const Bar = (props: Props) => {
  const { bar, removeDrink, allDrinks, addDrink } = props;

  const [drinks, setDrinks] = useState(bar.drink);
  const [addingDrinks, setAddingDrinks] = useState(false);
  const [addingIngredients, setAddingIngredients] = useState(false);

  const drinksNotInBar = useMemo(
    () => allDrinks.filter((drink) => !drinkInBarDrinks(drink, drinks)),
    [allDrinks, drinks]
  );

  const toggleAddingDrinks = () => {
    setAddingDrinks((prev) => !prev);
    setAddingIngredients(false);
  };

  const toggleAddingIngredients = () => {
    setAddingIngredients((prev) => !prev);
    setAddingDrinks(false);
  };

  const removeDrinkFromBar = (drinkId: string) => {
    setDrinks((prevState) => prevState.filter((drink) => drink.id !== drinkId));
    removeDrink(drinkId);
  };

  const addDrinkToBar = (drinkId: string) => {
    addDrink(drinkId);
  };

  return (
    <>
      <BarNav
        barId={bar.id}
        onAddDrink={() => toggleAddingDrinks()}
        onAddIngredient={() => toggleAddingIngredients()}
      />
      <AddDrink
        display={addingDrinks}
        drinks={drinksNotInBar}
        addDrink={addDrinkToBar}
      />
      <AddIngredient display={addingIngredients} />
      <DrinkList
        drinks={drinks}
        type={"drink"}
        removeDrinkFromBar={removeDrinkFromBar}
      />
    </>
  );
};

export default Bar;

type ItemType = {
  name: string;
  id: string;
};

const AddDrink = (props: {
  display: boolean;
  drinks: DrinkType[];
  addDrink: (drinkId: string) => void;
}) => {
  const { display, drinks, addDrink } = props;

  if (!display) return null;

  const onSelectedItemChange = (selectedItem: ItemType | undefined) => {
    if (selectedItem) {
      addDrink(selectedItem.id);
    }
  };

  return (
    <Center>
      <ComboBox
        items={drinks}
        onSelectedItemChange={onSelectedItemChange}
        submit={() => console.log("fooo")}
      />
    </Center>
  );
};

const AddIngredient = (props: { display: boolean }) => {
  const { display } = props;

  if (!display) return null;
  return (
    <Center>
      <div>Add Ingredient</div>
    </Center>
  );
};

const drinkInBarDrinks = (drink: DrinkType, barDrinks: BarDrink[]) => {
  const barDrinkMatch = barDrinks.find((barDrink) => barDrink.id === drink.id);
  return barDrinkMatch ? true : false;
};
