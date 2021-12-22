import { IconButton } from "@chakra-ui/button";
import { AddIcon } from "@chakra-ui/icons";
import React from "react";
import { useFieldArray } from "react-hook-form";
import { useIngredients } from "../../../../supabase/ingredients";
import Loading from "../../../Loading";
import { DrinkFormValues } from "../DrinkForm";
import IngredientSelect from "./IngredientSelect";

const IngredientsSelect = () => {
  const { fields, append, remove } = useFieldArray<
    DrinkFormValues,
    "ingredients",
    "key"
  >({
    name: "ingredients",
    keyName: "key",
  });

  const { ingredients } = useIngredients();

  if (!ingredients) return <Loading />;

  return (
    <>
      {fields.map((fieldArray, index) => (
        <IngredientSelect
          key={fieldArray.key}
          remove={remove}
          fieldArray={fieldArray}
          index={index}
          allIngredients={ingredients}
        />
      ))}
      <IconButton
        aria-label="Add Ingredient"
        onClick={() => {
          debugger;
          append({
            amount: 0,
            ingredient: { id: 0, name: "" },
            unit: "",
            id: 0,
            ingredient_id: 0,
            drink_id: 0,
          });
        }}
      >
        <AddIcon />
      </IconButton>
    </>
  );
};

export default IngredientsSelect;
