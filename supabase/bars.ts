import { useEffect, useState } from "react";
import { BarType } from "../types/types";
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
  const [bars, setBars] = useState<BarType[]>([]);

  useEffect(() => {
    getBars().then((result) => {
      if (result.data) {
        setBars(result.data);
      }
    });
  }, []);

  return { bars, setBars };
};

const getBars = () =>
  supabase
    .from<BarType>("bar")
    .select(
      "*, drinks: drink (*, ingredients: ingredient_for_drink (*, ingredient (*)))"
    );

export const deleteDrinkForBar = (drinkId: number, barId: number) => {
  return supabase
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
