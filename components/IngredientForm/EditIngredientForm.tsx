import React from "react";
import { useToast } from "@chakra-ui/react";
import { useFilter } from "react-supabase";
import { IngredientType } from "../../types/types";
import IngredientForm from "./IngredientForm";

type Props = {
  ingredient: IngredientType;
};

const EditIngredientForm = (props: Props) => {
  const { ingredient } = props;
  const toast = useToast();

  const filter = useFilter((query) => query.eq("id", ingredient.id), [
    ingredient,
  ]);

  const triggerToast = (name: string) => {
    toast({
      title: "Ingredient Updated.",
      description: `${name} has been successfully updated!`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <IngredientForm
      ingredient={ingredient}
      triggerToast={triggerToast}
      filter={filter}
    />
  );
};

export default EditIngredientForm;
