import { useDelete, useSelect } from "react-supabase";
import { BarType } from "../types/new";
import { definitions } from "../types/supabase";
import { supabase } from "../utils/superbaseClient";

export const useBar = async (barId: string) => {
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
    .from("drink")
    .select("*, ingredients: ingredient_for_drink (*, ingredient (*))");
};

export const useDeleteDrinkForBar = () => {
  return useDelete("drink_for_bar");
};

export const useAddDrinkToBar = async (barId: number, drinkId: number) => {
  const drinkForBar = { bar_id: barId, drink_id: drinkId };

  return await supabase
    .from<definitions["drink_for_bar"]>("drink_for_bar")
    .upsert(drinkForBar);
};
