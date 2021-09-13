import React from "react";
import { useToast } from "@chakra-ui/react";
import EquipmentForm from "./EquipmentForm";

const CreateEquipmentForm = () => {
  const toast = useToast();

  const triggerToast = (name: string) => {
    toast({
      title: "Equipment created.",
      description: `${name} has been successfully created!`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return <EquipmentForm triggerToast={triggerToast} />;
};

export default CreateEquipmentForm;
