import { useSelect } from "react-supabase";
import { BarType, DrinkType } from "../types/new";
import { definitions } from "../types/supabase";
import { supabase } from "../utils/superbaseClient";

export const useBar = async (barId: number) => {
  return await supabase
    .from<BarType>("bar")
    .select(
      "*, drinks: drink (*, ingredients: ingredient_for_drink (*, ingredient (*)))"
    )
    .eq("id", barId);
};

export const useBars = () => {
  return useSelect("bar", {
    columns: "id, name",
  });
};

export const useDrinksNew = async () => {
  return await supabase
    .from<DrinkType>("drink")
    .select("*, ingredients: ingredient_for_drink (*, ingredient (*))");
};

export const deleteDrinkForBar = async (drinkId: number, barId: number) => {
  return await supabase
    .from("drink_for_bar")
    .delete()
    .eq("drink_id", drinkId)
    .eq("bar_id", barId);
};

export const addDrinkToBar = async (barId: number, drinkId: number) => {
  const drinkForBar = { bar_id: barId, drink_id: drinkId };

  return await supabase
    .from<definitions["drink_for_bar"]>("drink_for_bar")
    .upsert(drinkForBar);
};
