import { Center } from "@chakra-ui/layout";
import { UseComboboxStateChange } from "downshift";
import React, { useState } from "react";
import { BarType } from "../../types/types";
import BarNav from "./BarNav";
import ComboBox from "./ComboBox";
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
      <AddDrink display={addingDrinks} bar={bar} />
      <AddIngredient display={addingIngredients} />
      <DrinkList drinks={bar.drink} type={"drink"} />
    </>
  );
};

export default Bar;

type ItemType = {
  name: string;
};

const AddDrink = (props: { display: boolean; bar: BarType }) => {
  const { display, bar } = props;

  if (!display) return null;

  const onSelectedItemChange: (
    changes: UseComboboxStateChange<ItemType>
  ) => void = ({ inputValue }) => console.log(inputValue);

  return (
    <Center>
      <ComboBox
        items={bar.drink}
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
