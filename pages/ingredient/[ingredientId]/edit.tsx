import { Box } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ErrorOrNot from "../../../components/ErrorOrNot";
import Header from "../../../components/Header";
import EditIngredientForm from "../../../components/Form/IngredientForm/EditIngredientForm";
import { Ingredient } from "../../../types/types";
import { Spinner } from "@chakra-ui/spinner";
import { useIngredient } from "../../../supabase/ingredients";

const RoutedEditIngredient = () => {
  const router = useRouter();
  const { ingredientId } = router.query;

  if (!ingredientId || Array.isArray(ingredientId)) return <Spinner />;

  return <EditIngredientPage ingredientId={ingredientId} />;
};

export default RoutedEditIngredient;

const EditIngredientPage = (props: { ingredientId: string }) => {
  const { ingredientId } = props;
  const [ingredient, setIngredient] = useState<Ingredient>();

  const [{ data, error }] = useIngredient(ingredientId);

  useEffect(() => {
    if (data && data[0]) setIngredient(data[0]);
  }, [data]);

  return (
    <Box>
      <Header />
      {ingredient ? <EditIngredientForm ingredient={ingredient} /> : ""}
      <ErrorOrNot error={error} />
    </Box>
  );
};
