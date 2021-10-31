import { Box } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useFilter, useSelect } from "react-supabase";
import ErrorOrNot from "../../../components/ErrorOrNot";
import Header from "../../../components/Header";
import EditIngredientForm from "../../../components/Form/IngredientForm/EditIngredientForm";
import { Ingredient } from "../../../types/types";

const EditIngredient = () => {
  const router = useRouter();
  const { ingredientId } = router.query;
  const [ingredient, setIngredient] = useState<Ingredient>();

  const filter = useFilter((query) => query.eq("id", ingredientId), [
    ingredientId,
  ]);
  const [{ data, error }] = useSelect("ingredient", {
    filter,
  });

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

export default EditIngredient;
