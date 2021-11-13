import { VStack, Box, HStack } from "@chakra-ui/react";
import { BarDrink } from "../../types/types";
import React from "react";

type Props = {
  drinks: BarDrink[];
  type: string;
};

const DrinkList = (props: Props) => {
  const { drinks } = props;

  return (
    <VStack>
      {drinks.map((drink: BarDrink) => (
        <Drink key={`drink-${drink.id}`} drink={drink} />
      ))}
    </VStack>
  );
};

export default DrinkList;

type DrinkProps = {
  drink: BarDrink;
};

const Drink = (props: DrinkProps) => {
  const { drink } = props;

  const ingredentsNames = drink.ingredient
    .map((ingredient) => ingredient.name)
    .join(", ");

  console.log(ingredentsNames);

  return (
    <HStack justifyContent="space-between">
      <Box>{drink.name}</Box>
      <Box>{ingredentsNames}</Box>
    </HStack>
  );
};
