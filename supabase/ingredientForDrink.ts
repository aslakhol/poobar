import { definitions } from "../types/supabase";
import {
  IngredientForDrinkType,
  CreateIngredientForDrinkType,
  UpdateIngredientForDrinkType,
} from "../types/types";
import { supabase } from "../utils/superbaseClient";

export const mapToCreate = (
  drinkId: number,
  i: IngredientForDrinkType
): CreateIngredientForDrinkType => ({
  drink_id: drinkId,
  ingredient_id: i.ingredient.id,
  amount: i.amount,
  unit: i.unit,
});

const mapToUpdate = (
  drinkId: number,
  i: IngredientForDrinkType
): UpdateIngredientForDrinkType => ({
  id: i.id,
  drink_id: drinkId,
  ingredient_id: i.ingredient.id,
  amount: i.amount,
  unit: i.unit,
});

export const upsertIngredientsForDrink = async (
  drinkId: number,
  ingredientsForDrink: IngredientForDrinkType[]
) => {
  const toInsert = [];
  const toUpdate = [];

  for (const i of ingredientsForDrink) {
    if (i.id === 0) {
      toInsert.push(mapToCreate(drinkId, i));
    } else {
      toUpdate.push(mapToUpdate(drinkId, i));
    }
  }
  await createIngredientForDrink(toInsert);
  await updateIngredientForDrink(toUpdate);
};

export const createIngredientForDrink = async (
  ingredientsForDrinks: CreateIngredientForDrinkType[]
) => {
  return await supabase
    .from<definitions["ingredient_for_drink"]>("ingredient_for_drink")
    .insert(ingredientsForDrinks);
};

const updateIngredientForDrink = async (
  ingredientsForDrinks: UpdateIngredientForDrinkType[]
) => {
  return await supabase
    .from("ingredient_for_drink")
    .upsert(ingredientsForDrinks);
};

export const deleteIngredientForDrink = async (
  ingredientForDrinkIds: number[]
) => {
  return await supabase
    .from<IngredientForDrinkType>("ingredient_for_drink")
    .delete()
    .in("id", ingredientForDrinkIds);
};
