import { Center } from "@chakra-ui/layout";
import React, { useMemo, useState } from "react";
import { BarType, DrinkType } from "../../types/types";
import BarNav from "./BarNav";
import ComboBox from "./ComboBox";
import DrinkList from "./DrinkList";

type Props = {
  bar: BarType;
  removeDrink: (drinkId: number) => void;
  allDrinks: DrinkType[];
  addDrink: (drinkId: number) => void;
};

const Bar = (props: Props) => {
  const { bar, removeDrink, allDrinks, addDrink } = props;

  const [drinks, setDrinks] = useState(bar.drinks);
  const [addingDrinks, setAddingDrinks] = useState(false);
  const [addingIngredients, setAddingIngredients] = useState(false);

  const drinksNotInBar = useMemo(() => {
    return allDrinks.filter((drink) => !drinkInBar(drink, drinks));
  }, [allDrinks, drinks]);

  const toggleAddingDrinks = () => {
    setAddingDrinks((prev) => !prev);
    setAddingIngredients(false);
  };

  const toggleAddingIngredients = () => {
    setAddingIngredients((prev) => !prev);
    setAddingDrinks(false);
  };

  const removeDrinkFromBar = (drinkId: number) => {
    setDrinks((prevState) => prevState.filter((drink) => drink.id !== drinkId));
    removeDrink(drinkId);
  };

  const addDrinkToBar = (drinkId: number) => {
    const drinkToAdd = allDrinks.filter((drink) => drink.id === drinkId)[0];

    setDrinks((prevState) => [...prevState, drinkToAdd]);
    addDrink(drinkId);
  };

  return (
    <>
      <BarNav
        onAddDrink={() => toggleAddingDrinks()}
        onAddIngredient={() => toggleAddingIngredients()}
      />
      <AddDrink
        display={addingDrinks}
        drinks={drinksNotInBar}
        addDrink={addDrinkToBar}
      />
      <AddIngredient display={addingIngredients} />
      <DrinkList drinks={drinks} removeDrinkFromBar={removeDrinkFromBar} />
    </>
  );
};

export default Bar;

const AddDrink = (props: {
  display: boolean;
  drinks: DrinkType[];
  addDrink: (drinkId: number) => void;
}) => {
  const { display, drinks, addDrink } = props;

  if (!display) {
    return null;
  }

  const onSelectedItemChange = (selectedItem?: {
    name: string;
    id: number;
  }) => {
    if (selectedItem) {
      addDrink(selectedItem.id);
    }
  };

  return (
    <Center>
      <ComboBox items={drinks} onSelectedItemChange={onSelectedItemChange} />
    </Center>
  );
};

const AddIngredient = (props: { display: boolean }) => {
  const { display } = props;

  if (!display) {
    return null;
  }

  return (
    <Center>
      <div>Add Ingredient</div>
    </Center>
  );
};

const drinkInBar = (drink: DrinkType, barDrinks: DrinkType[]) => {
  for (const barDrink of barDrinks) {
    if (barDrink.id === drink.id) {
      return true;
    }
  }
  return false;
};
