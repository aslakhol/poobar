import React, { useEffect, useState } from "react";
import { IngredientType } from "../../../types/types";
import { IconButton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import IngredientSelect from "./IngredientSelect";

const Ingredients = () => {
  const [ingredients, setIngredients] = useState<IngredientType[]>([]);
  const [openAddIngredient, setOpenAddIngredient] = useState<boolean>(false);

  const addIngredient = (ingredient: IngredientType) => {
    setIngredients((prevState) => [...prevState, ingredient]);
    setOpenAddIngredient(false);
  };

  useEffect(() => {
    console.log(ingredients);
  }, [ingredients]);

  return (
    <>
      <SelectedIngredients ingredients={ingredients} />
      {openAddIngredient ? (
        <IngredientSelect
          selectIngredient={addIngredient}
          selectedIngredients={ingredients}
        />
      ) : (
        <AddButton trigger={() => setOpenAddIngredient(true)} />
      )}
    </>
  );
};

export default Ingredients;

type AddButtonProps = {
  trigger: () => void;
};

const AddButton = (props: AddButtonProps) => {
  const { trigger } = props;

  return (
    <IconButton
      aria-label="Add ingredient"
      icon={<AddIcon />}
      onClick={trigger}
    />
  );
};

type SelectedIngredientsType = {
  ingredients: IngredientType[];
};

const SelectedIngredients = (props: SelectedIngredientsType) => {
  const { ingredients } = props;
  return (
    <>
      {ingredients.map((ingredient) => (
        <div>{ingredient.name}</div>
      ))}
    </>
  );
};
