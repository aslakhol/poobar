import { useFilter, useSelect } from "react-supabase";

export const useDrink = (drinkId: string) => {
  const filter = useFilter((query) => query.eq("id", drinkId), [drinkId]);

  return useSelect("drink", {
    columns: `id, name, description, instructions, ingredients: ingredient_for_drink (id, amount, unit, ingredient (id, name))`,
    filter,
  });
};

export const useDrinks = () => {
  return useSelect("drink", {
    columns: `id, name, description, instructions, ingredients: ingredient_for_drink (id, amount, unit, ingredient (id, name))`,
  });
};
