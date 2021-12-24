import React from "react";
import { useToast } from "@chakra-ui/react";
import IngredientForm from "./IngredientForm";
import { useRouter } from "next/router";
import { IngredientType } from "../../../types/types";

type Props = {
  ingredient: IngredientType;
  updateIngredient: (ingredient: IngredientType) => void;
};

const EditIngredientForm = (props: Props) => {
  const { ingredient, updateIngredient } = props;
  const toast = useToast();
  const router = useRouter();

  const triggerToast = (name: string) => {
    toast({
      title: "Ingredient Updated.",
      description: `${name} has been successfully updated!`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const editIngredient = (ingredient: IngredientType) => {
    updateIngredient(ingredient);
    triggerToast(ingredient.name);
    router.push(`${router.basePath}/ingredient/`);
  };

  return <IngredientForm ingredient={ingredient} submit={editIngredient} />;
};

export default EditIngredientForm;
