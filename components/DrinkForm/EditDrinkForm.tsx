import React from "react";
import { useToast } from "@chakra-ui/react";
import { useFilter } from "react-supabase";
import { DrinkType } from "../../types/types";
import DrinkForm from "./DrinkForm";

type Props = {
  drink: DrinkType;
};

const EditDrinkForm = (props: Props) => {
  const { drink } = props;
  const toast = useToast();

  const filter = useFilter((query) => query.eq("id", drink.id), [drink]);

  const triggerToast = (name: string) => {
    toast({
      title: "Drink Updated.",
      description: `${name} has been successfully updated!`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <DrinkForm drink={drink} triggerToast={triggerToast} filter={filter} />
  );
};

export default EditDrinkForm;
