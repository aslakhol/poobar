import React from "react";
import { useToast } from "@chakra-ui/react";
import DrinkForm from "./DrinkForm";
import { DrinkType } from "../../../types/types";
import router from "next/router";

type Props = {
  drink: DrinkType;
  updateDrink: (drink: DrinkType) => Promise<any>;
};

const EditDrinkForm = (props: Props) => {
  const { drink, updateDrink } = props;
  const toast = useToast();

  const triggerToast = (name: string) => {
    toast({
      title: "Drink Updated.",
      description: `${name} has been successfully updated!`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const submit = (drink: DrinkType) => {
    updateDrink(drink).then(() => {
      triggerToast(drink.name);
      router.push(`${router.basePath}/drink/`);
    });
  };

  return <DrinkForm drink={drink} submit={submit} />;
};

export default EditDrinkForm;
