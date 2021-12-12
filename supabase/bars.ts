import { useDelete, useFilter, useSelect, useUpsert } from "react-supabase";
import { supabase } from "../utils/superbaseClient";

export const useBar = (barId: string) => {
  const filter = useFilter((query) => query.eq("id", barId), [barId]);

  return useSelect("bar", {
    columns: `id, name, drink (id, name, ingredient (id, name))`,
    filter,
  });
};

export const useBars = () => {
  return useSelect("bar", {
    columns: "id, name",
  });
};

export const useDeleteDrinkForBar = () => {
  return useDelete("drink_for_bar");
};

export const useAddDrinkToBar = async (barId: string, drinkId: string) => {
  const drinkForBar = { bar_id: barId, drink_id: drinkId };

  return await supabase.from("drink_for_bar").upsert(drinkForBar);
};

type DrinkForBar = {
  id: number;
  bar_id: number;
  drink_id: number;
};
