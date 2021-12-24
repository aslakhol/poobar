import React from "react";
import { useToast } from "@chakra-ui/react";
import DrinkForm from "./DrinkForm";
import { CreateDrinkType } from "../../../types/types";
import router from "next/router";

type Props = {
  createDrink: (drink: CreateDrinkType) => Promise<any>;
};

const CreateDrinkForm = (props: Props) => {
  const { createDrink } = props;
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

  const submit = (drink: CreateDrinkType) => {
    createDrink(drink).finally(() => {
      triggerToast(drink.name);
      router.push(`${router.basePath}/drink/`);
    });
  };

  return <DrinkForm submit={submit} />;
};

export default CreateDrinkForm;
