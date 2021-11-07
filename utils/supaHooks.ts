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

export const useIngredient = (ingredientId: string) => {
  const filter = useFilter((query) => query.eq("id", ingredientId), [
    ingredientId,
  ]);
  return useSelect("ingredient", {
    filter,
  });
};

export const useIngredients = () => {
  return useSelect("ingredient", {
    columns: "id, name",
  });
};

export const useBar = (barId: string) => {};

export const useBars = () => {
  return useSelect("bar", {
    columns: "id, name",
  });
};

export const useEquipment = (equipmentId: string) => {
  const filter = useFilter((query) => query.eq("id", equipmentId), [
    equipmentId,
  ]);
  return useSelect("equipment", {
    filter,
  });
};

export const useEquipments = () => {
  return useSelect("equipment", {
    columns: "id, name",
  });
};
