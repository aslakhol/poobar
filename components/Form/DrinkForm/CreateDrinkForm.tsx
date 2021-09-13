import React from "react";
import { useToast } from "@chakra-ui/react";
import DrinkForm from "./DrinkForm";

const CreateDrinkForm = () => {
  const toast = useToast();

  const triggerToast = (name: string) => {
    toast({
      title: "Drink created.",
      description: `${name} has been successfully created!`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return <DrinkForm triggerToast={triggerToast} />;
};

export default CreateDrinkForm;
