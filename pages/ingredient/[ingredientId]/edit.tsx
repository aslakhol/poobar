import { Box } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import React from "react";
import Header from "../../../components/Header";
import EditIngredientForm from "../../../components/Form/IngredientForm/EditIngredientForm";
import { Spinner } from "@chakra-ui/spinner";
import { updateIngredient, useIngredient } from "../../../supabase/ingredients";
import Loading from "../../../components/Loading";
import { IngredientType } from "../../../types/new";

const RoutedEditIngredient = () => {
  const router = useRouter();
  const { ingredientId } = router.query;

  if (!ingredientId || Array.isArray(ingredientId)) return <Spinner />;

  return <EditIngredientPage ingredientId={Number(ingredientId)} />;
};

export default RoutedEditIngredient;

const EditIngredientPage = (props: { ingredientId: number }) => {
  const { ingredientId } = props;
  const { ingredient } = useIngredient(ingredientId);

  const editIngredient = (ingredient: IngredientType) => {
    console.log("EditIngredientPage", ingredient);

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
