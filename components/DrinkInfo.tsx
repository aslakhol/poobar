import { VStack } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { useFilter, useSelect } from "react-supabase";
import { DrinkType, IngredientForDrink } from "../types/types";
import ErrorOrNot from "./ErrorOrNot";

type Props = { drinkId: string };

const DrinkInfo = (props: Props) => {
  const { drinkId } = props;
  const [drink, setDrink] = useState<DrinkType>();

  const filter = useFilter((query) => query.eq("id", drinkId), [drinkId]);
  const [{ data, error }] = useSelect("drink", {
    columns: `id, name, description, instructions, ingredient (id, name)`,
    filter,
  });

  useEffect(() => {
    if (data && data[0]) setDrink(data[0]);
  }, [data]);

  return (
    <VStack>
      <p>Id: {drinkId}</p>
      <p>Name: {drink?.name}</p>
      <p>Ingredients:</p>
      {drink?.ingredients.map((ingredient) => (
        <Ingredient key={ingredient.ingredient.id} ingredient={ingredient} />
      ))}
      <p>Instructions: {drink?.instructions}</p>
      <p>Description: {drink?.description}</p>
      <ErrorOrNot error={error} />
    </VStack>
  );
};

export default DrinkInfo;

type IngredientProps = {
  ingredient: IngredientForDrink;
};

const Ingredient = (props: IngredientProps) => {
  const { name } = props.ingredient.ingredient;
  return <p>{name}</p>;
};
