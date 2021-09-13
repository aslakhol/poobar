import React from "react";
import { useToast } from "@chakra-ui/react";
import IngredientForm from "./IngredientForm";

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

  return <IngredientForm triggerToast={triggerToast} />;
};

export default CreateIngredientForm;
