import Header from "../../components/Header";
import CreateIngredientForm from "../../components/Form/IngredientForm/CreateIngredientForm";
import { createIngredient } from "../../supabase/ingredients";
import { CreateIngredientType } from "../../types/new";

const NewIngredientPage = () => {
  const create = (ingredient: CreateIngredientType) =>
    createIngredient(ingredient);

  return (
    <>
      <Header />
      <CreateIngredientForm create={create} />
    </>
  );
};

export default NewIngredientPage;
