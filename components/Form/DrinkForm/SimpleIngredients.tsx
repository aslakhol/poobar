import { IconButton } from "@chakra-ui/button";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/input";
import { Flex } from "@chakra-ui/layout";
import { NumberInput, NumberInputField } from "@chakra-ui/number-input";
import { Select } from "@chakra-ui/select";
import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import IngredientSelect from "./IngredientSelect";

type Ingredient = {
  name: string;
  amount: number;
  unit: string;
};

export type IngredientsSelectType = {
  ingredients: Ingredient[];
};

const SimpleIngredients = () => {
  const { control, register, watch } = useForm<IngredientsSelectType>();
  const {
    fields,
    append,
    prepend,
    remove,
    swap,
    move,
    insert,
  } = useFieldArray({ control, name: "ingredients" });

  console.log(watch());

  return (
    <>
      {fields.map(({ id, name, amount, unit }, index) => (
        <Flex key={id}>
          <Input
            {...register(`ingredients.${index}.name`)}
            maxW={20}
            defaultValue={name}
          />
          {/* <IngredientSelect
            selectedIngredients={[]}
            {...register(`ingredients.${index}.name`)}
          /> */}
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
            <option value="g">g</option>
            <option value="wedge">Wedge</option>
            <option value="shot">Shot</option>
            <option value="part">Part</option>
            <option value="bunch">Bunch</option>
          </Select>
          <IconButton
            aria-label="Remove ingredient"
            variant="ghost"
            onClick={() => remove(index)}
          >
            <DeleteIcon />
          </IconButton>
        </Flex>
      ))}
      <IconButton
        aria-label="Add Ingredient"
        onClick={() => append({ name: "", amount: 0, unit: "" })}
      >
        <AddIcon />
      </IconButton>
    </>
  );

  return <>SimpleIngredients</>;
};

export default SimpleIngredients;
