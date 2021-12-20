import { IconButton } from "@chakra-ui/button";
import { DeleteIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/layout";
import { NumberInput, NumberInputField } from "@chakra-ui/number-input";
import { Select } from "@chakra-ui/select";
import React from "react";
import { FieldArrayWithId, useFormContext } from "react-hook-form";
import { IngredientType } from "../../../../types/new";
import ComboBox from "./ComboBox";
import { DrinkFormValues } from "../DrinkForm";

const IngredientSelect = (props: {
  index: number;
  allIngredients: IngredientType[];
  remove: (index?: number | number[] | undefined) => void;
  fieldArray: FieldArrayWithId<DrinkFormValues, "ingredients", "id">;
}) => {
  const { index, fieldArray, allIngredients, remove } = props;
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
        <option value="shot">Shot</option>
        <option value="part">Part</option>
        <option value="bunch">Bunch</option>
        <option value="garnish">Garnish</option>
      </Select>
      <IconButton
        aria-label="Remove ingredient"
        variant="ghost"
        onClick={() => remove(index)}
      >
        <DeleteIcon />
      </IconButton>
    </Flex>
  );
};

export default IngredientSelect;
