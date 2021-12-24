import { VStack } from "@chakra-ui/layout";
import React from "react";
import { DrinkType, IngredientForDrinkType } from "../../types/types";

type Props = { drink: DrinkType };

const DrinkInfo = (props: Props) => {
  const { drink } = props;

  return (
    <VStack>
      <p>Id: {drink.id}</p>
      <p>Name: {drink.name}</p>
      <p>Ingredients:</p>
      {drink.ingredients.map((ingredientForDrink) => (
        <Ingredient
          key={ingredientForDrink.ingredient.id}
          ingredientForDrink={ingredientForDrink}
        />
      ))}
      <p>Instructions: {drink.instructions}</p>
      <p>Description: {drink.description}</p>
    </VStack>
  );
};

export default DrinkInfo;

type IngredientProps = {
  ingredientForDrink: IngredientForDrinkType;
};

const Ingredient = (props: IngredientProps) => {
  const { amount, unit } = props.ingredientForDrink;
  const { name } = props.ingredientForDrink.ingredient;
  return (
    <p>
      {amount} {unit} of {name}
    </p>
  );
};
