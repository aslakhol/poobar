import { useState, useEffect } from "react";
import { CreateDrinkType, DrinkType } from "../types/types";
import { definitions } from "../types/supabase";
import { supabase } from "../utils/superbaseClient";
import {
  createIngredientForDrink,
  mapToCreate,
  upsertIngredientsForDrink,
} from "./ingredientForDrink";

export const useDrink = (drinkId: number) => {
  const [drink, setDrink] = useState<DrinkType>();

  useEffect(() => {
    getDrink(drinkId).then((result) => {
      if (result.data && result.data[0]) {
        setDrink(result.data[0]);
      }
    });
  }, []);

  return { drink, setDrink };
};

const getDrink = (drinkId: number) =>
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
    .select("*, ingredients: ingredient_for_drink (*, ingredient (*))")
    .eq("deleted", false);
};

export const deleteDrink = async (drinkId: number) => {
  return await supabase
    .from<DrinkType>("drink")
    .update({ deleted: true })
    .eq("id", drinkId);
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
          createIngredientForDrink([mapToCreate(drinkId, ingredientForDrink)]);
        }
      }

      return result;
    });
};

export const updateDrink = async (drink: DrinkType) => {
  const { ingredients, ...justDrink } = drink;

  await upsertIngredientsForDrink(justDrink.id, ingredients);

  return await supabase
    .from<DrinkType>("drink")
    .update(justDrink)
    .eq("id", drink.id);
};
