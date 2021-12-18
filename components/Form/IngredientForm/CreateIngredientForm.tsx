import React from "react";
import { useToast } from "@chakra-ui/react";
import IngredientForm from "./IngredientForm";
import { IngredientType } from "../../../types/new";

const CreateIngredientForm = () => {
  const toast = useToast();

  const triggerToast = (name: string) => {
    toast({
      title: "Ingredient created.",
      description: `${name} has been successfully created!`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const createIngredient = (ingredient: IngredientType) => {
    triggerToast(ingredient.name);
  };

  return <IngredientForm submit={createIngredient} />;
};

export default CreateIngredientForm;
