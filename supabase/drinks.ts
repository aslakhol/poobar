import { useState, useEffect } from "react";
import Ingredient from "../pages/ingredient/[ingredientId]";
import {
  CreateDrinkType,
  DrinkType,
  IngredientForDrinkType,
} from "../types/new";
import { definitions } from "../types/supabase";
import { supabase } from "../utils/superbaseClient";

export const useDrink = (drinkId: number) => {
  const [drink, setDrink] = useState<DrinkType>();

  useEffect(() => {
    getIngredient(drinkId).then((result) => {
      if (result.data && result.data[0]) {
        setDrink(result.data[0]);
      }
    });
  }, []);

  return { drink, setDrink };
};

const getIngredient = (drinkId: number) =>
  supabase
    .from<DrinkType>("drink")
    .select("*, ingredients: ingredient_for_drink (*, ingredient (*))")
    .eq("id", drinkId);

export const useDrinks = () => {
  const [drinks, setDrinks] = useState<DrinkType[]>([]);

  useEffect(() => {
    getDrinks().then((result) => {
      if (result.data) {
        setDrinks(result.data);
      }
    });
  }, []);

  return { drinks, setDrinks };
};

const getDrinks = async () => {
  return await supabase
    .from<DrinkType>("drink")
    .select("*, ingredients: ingredient_for_drink (*, ingredient (*))");
};

export const deleteDrink = async (drinkId: number) => {
  return await supabase.from<DrinkType>("drink").delete().eq("id", drinkId);
};

export const createDrink = async (drink: CreateDrinkType) => {
  const { ingredients, ...justDrink } = drink;

  return supabase
    .from<definitions["drink"]>("drink")
    .insert(justDrink)
    .then((result) => {
      if (result.data && result.data[0]) {
        const drinkId = result.data[0].id;

        for (const ingredientForDrink of ingredients) {
          createIngredientForDrink(drinkId, ingredientForDrink);
        }
      }

      return result;
    });
};

export const updateDrink = async (drink: DrinkType) => {
  const { ingredients, ...justDrink } = drink;
  console.log(ingredients);

  for (const ingredient of ingredients) {
    if (ingredient.drink_id) {
      updateIngredientForDrink(ingredient.drink_id, ingredient);
    } else {
      createIngredientForDrink(drink.id, ingredient);
    }
  }

  return await supabase
    .from<DrinkType>("drink")
    .update(justDrink)
    .eq("id", drink.id);
};

export const createIngredientForDrink = async (
  drinkId: number,
  ingredientForDrink: IngredientForDrinkType
) => {
  return await supabase
    .from<definitions["ingredient_for_drink"]>("ingredient_for_drink")
    .insert({
      drink_id: drinkId,
      ingredient_id: ingredientForDrink.ingredient.id,
      amount: ingredientForDrink.amount,
      unit: ingredientForDrink.unit,
    });
};

export const updateIngredientForDrink = async (
  drinkId: number,
  ingredientForDrink: IngredientForDrinkType
) => {
  return await supabase
    .from<definitions["ingredient_for_drink"]>("ingredient_for_drink")
    .update({
      amount: ingredientForDrink.amount,
      unit: ingredientForDrink.unit,
    })
    .eq("drink_id", drinkId)
    .eq("ingredient_id", ingredientForDrink.ingredient_id);
};
