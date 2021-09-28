import { ListItem, UnorderedList } from "@chakra-ui/layout";
import React, { useState } from "react";
import { IngredientType } from "../../../types/types";
import IngredientSelect from "./IngredientSelect";

const Ingredients = () => {
  const [ingredients, setIngredients] = useState<IngredientType[]>([]);

  const addIngredient = (ingredient: IngredientType) => {
    setIngredients((prevState) => [...prevState, ingredient]);
  };

  return (
    <>
      <IngredientSelect
        selectIngredient={addIngredient}
        selectedIngredients={ingredients}
      />
      <SelectedIngredients ingredients={ingredients} />
    </>
  );
};

export default Ingredients;

type SelectedIngredientsType = {
  ingredients: IngredientType[];
};

const SelectedIngredients = (props: SelectedIngredientsType) => {
  const { ingredients } = props;
  return (
    <UnorderedList>
      {ingredients.map((ingredient) => (
        <ListItem key={ingredient.id}>{ingredient.name}</ListItem>
      ))}
    </UnorderedList>
  );
};
