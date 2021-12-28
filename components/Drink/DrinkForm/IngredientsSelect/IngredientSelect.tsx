import { IconButton } from "@chakra-ui/button";
import { DeleteIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/layout";
import { NumberInput, NumberInputField } from "@chakra-ui/number-input";
import { Select } from "@chakra-ui/select";
import React from "react";
import { FieldArrayWithId, useFormContext } from "react-hook-form";
import { CreateDrinkType, IngredientType } from "../../../../types/types";
import ComboBox from "./ComboBox";

const IngredientSelect = (props: {
  index: number;
  allIngredients: IngredientType[];
  markDelete: (index: number, ingredientId: number) => void;
  fieldArray: FieldArrayWithId<CreateDrinkType, "ingredients", "key">;
}) => {
  const { index, fieldArray, allIngredients, markDelete } = props;
  const { id, amount, ingredient, unit } = fieldArray;

  const { register } = useFormContext();

  return (
    <Flex key={id}>
      <ComboBox
        items={allIngredients}
        name={`ingredients.${index}.ingredient`}
        defaultValue={ingredient}
      />
      <NumberInput min={0} maxW={20}>
        <NumberInputField
          {...register(`ingredients.${index}.amount`)}
          defaultValue={amount}
        />
      </NumberInput>
      <Select
        {...register(`ingredients.${index}.unit`)}
        maxW={20}
        defaultValue={unit}
      >
        <option value="">Select unit</option>
        <option value="ml">ml</option>
        <option value="cl">cl</option>
        <option value="dl">dl</option>
        <option value="oz">oz</option>
        <option value="g">g</option>
        <option value="wash">wash</option>
        <option value="dash">dash</option>
        <option value="drop">drop</option>
        <option value="barspoon">barspoon</option>
        <option value="part">part</option>
        <option value="bunch">bunch</option>
        <option value="garnish">garnish</option>
      </Select>
      <IconButton
        aria-label="Remove ingredient"
        variant="ghost"
        onClick={() => markDelete(index, id)}
      >
        <DeleteIcon />
      </IconButton>
    </Flex>
  );
};

export default IngredientSelect;
