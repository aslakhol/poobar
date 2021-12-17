import { useEffect, useState } from "react";
import { useFilter, useSelect } from "react-supabase";
import { IngredientType } from "../types/new";
import { supabase } from "../utils/superbaseClient";

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

export const deleteIngredient = (ingredientId: number) => {
  supabase.from<IngredientType>("ingredients").delete().eq("id", ingredientId);
};
