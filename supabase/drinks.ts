import { useState, useEffect } from "react";
import { useFilter, useSelect } from "react-supabase";
import { CreateDrinkType, DrinkType } from "../types/new";
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

export const updateDrink = async (drink: DrinkType) => {
  return await supabase
    .from<DrinkType>("drink")
    .update(drink)
    .eq("id", drink.id);
};

export const createDrink = async (drink: CreateDrinkType) => {
  return await supabase.from<DrinkType>("drink").insert(drink);
};
