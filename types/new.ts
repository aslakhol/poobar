import { definitions } from "./supabase";

export type BarType = definitions["bar"] & {
  drinks: DrinkType[];
};

export type DrinkType = definitions["drink"] & {
  ingredients: IngredientForDrinkType[];
};

export type IngredientForDrinkType = definitions["ingredient_for_drink"] & {
  ingredient: IngredientType;
};

export type IngredientType = definitions["ingredient"];

export type CreateIngredientType = Omit<definitions["ingredient"], "id">;

export type CreateDrinkType = Omit<DrinkType, "id">;

export type CreateIngredientForDrinkType = Omit<IngredientForDrinkType, "id">;
