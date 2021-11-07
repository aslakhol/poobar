import { IconButton } from "@chakra-ui/button";
import { AddIcon } from "@chakra-ui/icons";
import { Spinner } from "@chakra-ui/spinner";
import React from "react";
import { useFieldArray } from "react-hook-form";
import { useIngredients } from "../../../supabase/ingredients";
import { DrinkFormValues } from "./DrinkForm";
import IngredientSelect from "./IngredientSelect";

const IngredientsSelect = () => {
  const { fields, append, remove } = useFieldArray<DrinkFormValues>({
    name: "ingredients",
  });

  const [{ data }] = useIngredients();

  if (!data) return <Spinner />;

  return (
    <>
      {fields.map((fieldArray, index) => (
        <IngredientSelect
          key={fieldArray.id}
          remove={remove}
          fieldArray={fieldArray}
          index={index}
          data={data}
        />
      ))}
      <IconButton
        aria-label="Add Ingredient"
        onClick={() =>
          append({ amount: 0, ingredient: { id: 0, name: "" }, unit: "" })
        }
      >
        <AddIcon />
      </IconButton>
    </>
  );
};

export default IngredientsSelect;
