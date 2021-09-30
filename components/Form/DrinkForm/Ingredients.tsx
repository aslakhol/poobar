import { Box, Flex, ListItem, UnorderedList } from "@chakra-ui/layout";
import { NumberInput, NumberInputField } from "@chakra-ui/number-input";
import { Select } from "@chakra-ui/select";
import React, { useState } from "react";
import { IngredientType } from "../../../types/types";
import IngredientSelect from "./IngredientSelect";

const Ingredients = () => {
  const [ingredients, setIngredients] = useState<IngredientType[]>([]);

  const addIngredient = (ingredient: IngredientType) => {
    setIngredients((prevState) => [...prevState, ingredient]);
  };

  return (
    <>
      <IngredientSelect
        selectIngredient={addIngredient}
        selectedIngredients={ingredients}
      />
      <SelectedIngredients ingredients={ingredients} />
    </>
  );
};

export default Ingredients;

type SelectedIngredientsType = {
  ingredients: IngredientType[];
};

const SelectedIngredients = (props: SelectedIngredientsType) => {
  const { ingredients } = props;
  return (
    <UnorderedList>
      {ingredients.map((ingredient) => (
        <ListItem key={ingredient.id}>
          <Flex>
            <span>{ingredient.name}</span>
            <NumberInput size={"xs"} min={0} maxW={16}>
              <NumberInputField />
            </NumberInput>
            <Select size={"xs"} maxW={20}>
              <option>ml</option>
              <option>cl</option>
              <option>dl</option>
              <option>g</option>
              <option>wedge</option>
              <option>shot</option>
              <option>part</option>
              <option>bunch</option>
            </Select>
          </Flex>
        </ListItem>
      ))}
    </UnorderedList>
  );
};
