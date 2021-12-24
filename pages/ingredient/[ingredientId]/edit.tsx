import { Box } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import React from "react";
import Header from "../../../components/Header";
import EditIngredientForm from "../../../components/Ingredients/IngredientForm/EditIngredientForm";
import { updateIngredient, useIngredient } from "../../../supabase/ingredients";
import Loading from "../../../components/Loading";
import { IngredientType } from "../../../types/new";

const RoutedEditIngredient = () => {
  const router = useRouter();
  const { ingredientId } = router.query;

  if (!ingredientId || Array.isArray(ingredientId)) {
    return <Loading />;
  }

  return <EditIngredientPage ingredientId={Number(ingredientId)} />;
};

export default RoutedEditIngredient;

const EditIngredientPage = (props: { ingredientId: number }) => {
  const { ingredientId } = props;
  const { ingredient } = useIngredient(ingredientId);

  const editIngredient = (ingredient: IngredientType) => {
    updateIngredient(ingredient);
  };

  if (!ingredient) {
    return <Loading />;
  }

  return (
    <Box>
      <Header />
      <EditIngredientForm
        ingredient={ingredient}
        updateIngredient={editIngredient}
      />
    </Box>
  );
};
