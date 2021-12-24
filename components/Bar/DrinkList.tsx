import {
  SimpleGrid,
  GridItem,
  Heading,
  Link,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import { CloseIcon } from "@chakra-ui/icons";
import { DrinkType } from "../../types/types";

type Props = {
  drinks: DrinkType[];
  removeDrinkFromBar: (drinkId: number) => void;
};

const DrinkList = (props: Props) => {
  const { drinks, removeDrinkFromBar } = props;

  return (
    <SimpleGrid columns={12} columnGap={3} rowGap={6} margin={4}>
      <GridItem colSpan={5}>
        <Heading as="h5" size="sm">
          Drink
        </Heading>
      </GridItem>
      <GridItem colSpan={5}>
        <Heading as="h5" size="sm">
          Ingredients
        </Heading>
      </GridItem>
      <GridItem colSpan={2}>
        <Heading as="h5" size="sm">
          Remove from bar
        </Heading>
      </GridItem>
      {drinks.map((drink: DrinkType) => (
        <Drink
          key={`drink-${drink.id}`}
          drink={drink}
          removeDrinkFromBar={removeDrinkFromBar}
        />
      ))}
    </SimpleGrid>
  );
};

export default DrinkList;

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
    <>
      <GridItem colSpan={5} isTruncated>
        <Link href={`/drink/${drink.id}`}>{drink.name}</Link>
      </GridItem>
      <GridItem colSpan={5} noOfLines={2}>
        {ingredentsNames}
      </GridItem>
      <GridItem colSpan={2} noOfLines={2}>
        <IconButton
          aria-label="remove drink"
          icon={<CloseIcon />}
          onClick={() => removeDrinkFromBar(drink.id)}
        />
      </GridItem>
    </>
  );
};
