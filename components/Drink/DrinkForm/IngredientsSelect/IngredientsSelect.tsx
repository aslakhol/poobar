import { IconButton } from "@chakra-ui/button";
import { AddIcon } from "@chakra-ui/icons";
import React, { Dispatch, SetStateAction } from "react";
import { useFieldArray } from "react-hook-form";
import { useIngredients } from "../../../../supabase/ingredients";
import Loading from "../../../Loading";
import { DrinkFormValues } from "../DrinkForm";
import IngredientSelect from "./IngredientSelect";

type Props = {
  setIngredientsToDelete: Dispatch<SetStateAction<number[]>>;
};

const IngredientsSelect = (props: Props) => {
  const { setIngredientsToDelete } = props;
  const { fields, append, remove } = useFieldArray<
    DrinkFormValues,
    "ingredients",
    "key"
  >({
    name: "ingredients",
    keyName: "key",
  });

  const { ingredients } = useIngredients();

  const markIngredientForDeletion = (index: number, ingredientId: number) => {
    remove(index);
    if (ingredientId === 0) {
      return;
    }
    setIngredientsToDelete((prevState) => [...prevState, ingredientId]);
  };

  if (!ingredients) return <Loading />;

  return (
    <>
      {fields.map((fieldArray, index) => (
        <IngredientSelect
          key={fieldArray.key}
          markDelete={markIngredientForDeletion}
          fieldArray={fieldArray}
          index={index}
          allIngredients={ingredients}
        />
      ))}
      <IconButton
        aria-label="Add Ingredient"
        onClick={() => {
          append({
            amount: 0,
            ingredient: { id: 0, name: "", deleted: false },
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
