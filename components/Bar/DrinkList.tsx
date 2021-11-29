import { SimpleGrid, GridItem, Heading, Link } from "@chakra-ui/react";
import { BarDrink } from "../../types/types";
import React from "react";

type Props = {
  drinks: BarDrink[];
  type: string;
};

const DrinkList = (props: Props) => {
  const { drinks } = props;

  return (
    <SimpleGrid columns={2} columnGap={3} rowGap={6} margin={4}>
      <GridItem colSpan={1}>
        <Heading as="h5" size="sm">
          Drink
        </Heading>
      </GridItem>
      <GridItem colSpan={1}>
        <Heading as="h5" size="sm">
          Ingredients
        </Heading>
      </GridItem>
      {drinks.map((drink: BarDrink) => (
        <Drink key={`drink-${drink.id}`} drink={drink} />
      ))}
    </SimpleGrid>
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

  return (
    <>
      <GridItem colSpan={1} isTruncated>
        <Link href={`/drink/${drink.id}`}>{drink.name}</Link>
      </GridItem>
      <GridItem colSpan={1} noOfLines={2}>
        {ingredentsNames}
      </GridItem>
    </>
  );
};
