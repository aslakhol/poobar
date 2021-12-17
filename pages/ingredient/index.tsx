import React from "react";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import { deleteIngredient, useIngredients } from "../../supabase/ingredients";
import IngredientsList from "../../components/Ingredients/IngredientsList";

const IngredientsPage = () => {
  const { ingredients, setIngredients } = useIngredients();

  const removeIngredient = (id: number) => {
    deleteIngredient(id);
  };

  if (!ingredients) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <IngredientsList
        ingredients={ingredients}
        setIngredients={setIngredients}
        deleteIngredient={removeIngredient}
      />
    </>
  );
};

export default IngredientsPage;
