import { AddIcon } from "@chakra-ui/icons";
import { HStack } from "@chakra-ui/layout";
import { ButtonGroup, Button, IconButton } from "@chakra-ui/react";
import React from "react";

type Props = {
  barId: string;
  onAddDrink: () => void;
  onAddIngredient: () => void;
};

const BarNav = (props: Props) => {
  const { barId, onAddDrink, onAddIngredient } = props;
  return (
    <HStack
      as="nav"
      aria-label="bar navigation"
      marginLeft="1rem"
      marginRight="1rem"
      marginBottom="1rem"
      justifyContent="space-evenly"
    >
      <ButtonGroup size="sm" isAttached variant="outline">
        <Button mr="-px" aria-label="Go to drinks for bar">
          Drinks
        </Button>
        <IconButton
          aria-label="Add drink to bar"
          icon={<AddIcon />}
          onClick={() => onAddDrink()}
        />
      </ButtonGroup>
      <ButtonGroup size="sm" isAttached variant="outline">
        <Button mr="-px" aria-label="Go to ingredients for bar">
          Ingredients
        </Button>
        <IconButton
          aria-label="Add ingredient to bar"
          icon={<AddIcon />}
          onClick={() => onAddIngredient()}
        />
      </ButtonGroup>
    </HStack>
  );
};

export default BarNav;
