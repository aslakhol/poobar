import { AddIcon } from "@chakra-ui/icons";
import { HStack } from "@chakra-ui/layout";
import { ButtonGroup, Button, IconButton } from "@chakra-ui/react";
import router from "next/router";
import React from "react";

const BarNav = (props: { barId: string }) => {
  const { barId } = props;
  return (
    <HStack
      as="nav"
      aria-label="bar navigation"
      marginLeft="1rem"
      marginBottom="1rem"
    >
      <ButtonGroup size="sm" isAttached variant="outline">
        <Button mr="-px" aria-label="Go to drinks for bar">
          Drinks
        </Button>
        <IconButton
          aria-label="Add drink to bar"
          icon={<AddIcon />}
          onClick={() => router.push(`/bar/${barId}/add-drink`)}
        />
      </ButtonGroup>
      <ButtonGroup size="sm" isAttached variant="outline">
        <Button mr="-px" aria-label="Go to ingredients for bar">
          Ingredients
        </Button>
        <IconButton
          aria-label="Add ingredient to bar"
          icon={<AddIcon />}
          onClick={() => router.push(`/bar/${barId}/add-ingredient`)}
        />
      </ButtonGroup>
    </HStack>
  );
};

export default BarNav;
