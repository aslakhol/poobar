import { VStack } from "@chakra-ui/layout";
import React from "react";
import { IngredientType } from "../../types/types";

type Props = { ingredient: IngredientType };

const Ingredient = (props: Props) => {
  const { ingredient } = props;

  return (
    <VStack>
      <p>Id: {ingredient.id}</p>
      <p>Name: {ingredient.name}</p>
      <p>Description: {ingredient.description}</p>
    </VStack>
  );
};

export default Ingredient;
