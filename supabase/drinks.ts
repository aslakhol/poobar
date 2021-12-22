import { useState, useEffect } from "react";
import {
  CreateDrinkType,
  CreateIngredientForDrinkType,
  DrinkType,
  IngredientForDrinkType,
  UpdateIngredientForDrinkType,
} from "../types/new";
import { definitions } from "../types/supabase";
import { supabase } from "../utils/superbaseClient";

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

export const upsertIngredientsForDrink = async (
  drinkId: number,
  ingredientsForDrink: IngredientForDrinkType[]
) => {
  const toInsert = [];
  const toUpdate = [];

  for (const i of ingredientsForDrink) {
    if (i.id === 0) {
      console.log(i, "inserting");

      toInsert.push(mapToCreate(drinkId, i));
    } else {
      console.log(i, "updateing");

      toUpdate.push(mapToUpdate(drinkId, i));
    }
  }
  await createIngredientForDrink(toInsert);
  await updateIngredientForDrink(toUpdate);
};

const mapToCreate = (
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
  ingredientForDrinkIds: number[],
  drinkId: number
) => {
  return await supabase
    .from<IngredientForDrinkType>("ingredient_for_drink")
    .delete()
    .in("ingredient_id", ingredientForDrinkIds)
    .eq("drink_id", drinkId);
};
