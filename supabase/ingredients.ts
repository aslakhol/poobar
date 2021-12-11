import { useFilter, useSelect } from "react-supabase";

export const useIngredient = (ingredientId: string) => {
  const filter = useFilter(
    (query) => query.eq("id", ingredientId),
    [ingredientId]
  );

  return useSelect("ingredient", {
    filter,
  });
};

export const useIngredients = () => {
  return useSelect("ingredient", {
    columns: "id, name",
  });
};
