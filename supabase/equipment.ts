import { useFilter, useSelect } from "react-supabase";

export const useEquipment = (equipmentId: string) => {
  const filter = useFilter(
    (query) => query.eq("id", equipmentId),
    [equipmentId]
  );

  return useSelect("equipment", {
    filter,
  });
};

export const useEquipments = () => {
  return useSelect("equipment", {
    columns: "id, name",
  });
};
