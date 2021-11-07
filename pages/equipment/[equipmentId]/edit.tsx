import { Box } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import EditEquipmentForm from "../../../components/Form/EquipmentForm/EditEquipmentForm";
import ErrorOrNot from "../../../components/ErrorOrNot";
import Header from "../../../components/Header";
import { EquipmentType } from "../../../types/types";
import { useEquipment } from "../../../utils/supaHooks";
import { Spinner } from "@chakra-ui/spinner";

const RoutedEditEquipment = () => {
  const router = useRouter();

  const { equipmentId } = router.query;

  if (!equipmentId || Array.isArray(equipmentId)) return <Spinner />;

  return <EditEquipmentPage equipmentId={equipmentId} />;
};

export default RoutedEditEquipment;

const EditEquipmentPage = (props: { equipmentId: string }) => {
  const { equipmentId } = props;
  const [equipment, setEquipment] = useState<EquipmentType>();

  const [{ data, error }] = useEquipment(equipmentId);

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
