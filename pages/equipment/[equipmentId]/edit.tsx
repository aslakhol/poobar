import { Box } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useFilter, useSelect } from "react-supabase";
import EditEquipmentForm from "../../../components/EquipmentForm/EditEquipmentForm";
import ErrorOrNot from "../../../components/ErrorOrNot";
import Header from "../../../components/Header";
import { EquipmentType } from "../../../types/types";

const EditEquipment = () => {
  const router = useRouter();
  const { equipmentId } = router.query;
  const [equipment, setEquipment] = useState<EquipmentType>();

  const filter = useFilter((query) => query.eq("id", equipmentId), [
    equipmentId,
  ]);
  const [{ data, error }] = useSelect("equipment", {
    filter,
  });

  useEffect(() => {
    if (data && data[0]) setEquipment(data[0]);
  }, [data]);

  return (
    <Box>
      <Header />
      {equipment ? <EditEquipmentForm equipment={equipment} /> : ""}
      <ErrorOrNot error={error} />
    </Box>
  );
};

export default EditEquipment;
