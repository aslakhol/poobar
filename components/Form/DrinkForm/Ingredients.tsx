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

type AddButtonProps = {
  trigger: () => void;
};

type SelectedIngredientsType = {
  ingredients: IngredientType[];
};

const SelectedIngredients = (props: SelectedIngredientsType) => {
  const { ingredients } = props;
  return (
    <>
      {ingredients.map((ingredient) => (
        <p>{ingredient.name}</p>
      ))}
    </>
  );
};
