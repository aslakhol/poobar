import { useFilter, useSelect } from "react-supabase";

export const useBar = (barId: string) => {
  const filter = useFilter((query) => query.eq("id", barId), [barId]);
  return useSelect("bar", {
    filter,
  });
};

export const useBars = () => {
  return useSelect("bar", {
    columns: "id, name",
  });
};
