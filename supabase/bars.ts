import { useEffect, useState } from "react";
import { useSelect } from "react-supabase";
import { BarType, DrinkType } from "../types/new";
import { definitions } from "../types/supabase";
import { supabase } from "../utils/superbaseClient";

export const useBar = (barId: number) => {
  const [bar, setBar] = useState<BarType>();

  useEffect(() => {
    getBar(barId).then((result) => {
      if (result.data && result.data[0]) {
        setBar(result.data[0]);
      }
    });
  }, [barId]);

  return { bar, setBar };
};

const getBar = (barId: number) =>
  supabase
    .from<BarType>("bar")
    .select(
      "*, drinks: drink (*, ingredients: ingredient_for_drink (*, ingredient (*)))"
    )
    .eq("id", barId);

export const useBars = () => {
  return useSelect("bar", {
    columns: "id, name",
  });
};

export const useDrinks = () => {
  const [drinks, setDrinks] = useState<DrinkType[]>([]);

  useEffect(() => {
    getDrinks().then((result) => {
      if (result.data && result.data[0]) {
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
