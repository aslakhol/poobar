import { CloseIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { DrinkType } from "../../types/types";

type DrinksProps = {
  drinks: DrinkType[];
  removeDrinkFromBar: (drinkId: number) => void;
};

const Drinks = (props: DrinksProps) => {
  const { drinks, removeDrinkFromBar } = props;

  return (
    <Flex wrap={"wrap"} justify="center">
      {drinks.map((drink) => (
        <Drink
          key={`drink-${drink.id}`}
          drink={drink}
          removeDrinkFromBar={removeDrinkFromBar}
        />
      ))}
    </Flex>
  );
};

export default Drinks;

type DrinkProps = {
  drink: DrinkType;
  removeDrinkFromBar: (drinkId: number) => void;
};

const Drink = (props: DrinkProps) => {
  const { drink, removeDrinkFromBar } = props;

  const ingredentsNames = drink.ingredients
    .map((ingredientForDrink) => ingredientForDrink.ingredient.name)
    .join(", ");

  return (
    <Flex
      direction={"column"}
      justify="space-between"
      border="2px"
      borderColor="gray.800"
      w={300}
      m="4"
      p="5"
    >
      <Box>
        <Text as="h3" fontSize="22">
          {drink.name}
        </Text>
        <Text as="i" color="#333" fontSize={12}>
          {drink.variant}
        </Text>
        <Box>{ingredentsNames}</Box>
      </Box>

      <Flex w="100%" justify={"space-between"} align={"center"}>
        <Text>Remove drink from bar?</Text>
        <IconButton
          aria-label="remove drink"
          icon={<CloseIcon />}
          onClick={() => removeDrinkFromBar(drink.id)}
        />
      </Flex>
    </Flex>
  );
};
