import React from "react";
import { useToast } from "@chakra-ui/react";
import IngredientForm from "./IngredientForm";
import { CreateIngredientType } from "../../../types/new";

type Props = {
  create: (ingredient: CreateIngredientType) => void;
};

const CreateIngredientForm = (props: Props) => {
  const { create } = props;
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

  const createIngredient = (ingredient: CreateIngredientType) => {
    create(ingredient);
    triggerToast(ingredient.name);
  };

  return <IngredientForm submit={createIngredient} />;
};

export default CreateIngredientForm;
