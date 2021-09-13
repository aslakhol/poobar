import React from "react";
import { useToast } from "@chakra-ui/react";
import { useFilter } from "react-supabase";
import { EquipmentType } from "../../../types/types";
import EquipmentForm from "./EquipmentForm";

type Props = {
  equipment: EquipmentType;
};

const EditEquipmentForm = (props: Props) => {
  const { equipment } = props;
  const toast = useToast();

  const filter = useFilter((query) => query.eq("id", equipment.id), [
    equipment,
  ]);

  const triggerToast = (name: string) => {
    toast({
      title: "Equipment Updated.",
      description: `${name} has been successfully updated!`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <EquipmentForm
      equipment={equipment}
      triggerToast={triggerToast}
      filter={filter}
    />
  );
};

export default EditEquipmentForm;
