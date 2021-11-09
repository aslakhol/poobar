import { Box } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ErrorOrNot from "../../../components/ErrorOrNot";
import Header from "../../../components/Header";
import EditIngredientForm from "../../../components/Form/IngredientForm/EditIngredientForm";
import { Ingredient } from "../../../types/types";
import { Spinner } from "@chakra-ui/spinner";

const EditIngredient = () => {
  const router = useRouter();
  const { ingredientId } = router.query;
  const [ingredient, setIngredient] = useState<Ingredient>();

  if (!ingredientId || Array.isArray(ingredientId)) return <Spinner />;

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

export default EditIngredient;
