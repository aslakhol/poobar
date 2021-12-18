import { useEffect, useState } from "react";
import { IngredientType } from "../types/new";
import { supabase } from "../utils/superbaseClient";

export const useIngredient = (ingredientId: number) => {
  const [ingredient, setIngredient] = useState<IngredientType>();

  useEffect(() => {
    getIngredient(ingredientId).then((result) => {
      if (result.data && result.data[0]) {
        setIngredient(result.data[0]);
      }
    });
  }, []);

  return { ingredient, setIngredient };
};

const getIngredient = (ingredientId: number) =>
  supabase
    .from<IngredientType>("ingredient")
    .select("*")
    .eq("id", ingredientId);

export const useIngredients = () => {
  const [ingredients, setIngredients] = useState<IngredientType[]>([]);

  useEffect(() => {
    getIngredients().then((result) => {
      if (result.data && result.data) {
        setIngredients(result.data);
      }
    });
  }, []);

  return { ingredients, setIngredients };
};

const getIngredients = async () => {
  return await supabase.from<IngredientType>("ingredient").select("*");
};

export const deleteIngredient = async (ingredientId: number) => {
  return await supabase
    .from<IngredientType>("ingredients")
    .delete()
    .eq("id", ingredientId);
};

export const updateIngredient = async (ingredient: IngredientType) => {
  return await supabase
    .from<IngredientType>("ingredient")
    .update(ingredient)
    .eq("id", ingredient.id)
    .then((result) => result);
};
