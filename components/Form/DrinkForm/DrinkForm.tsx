import {
  FieldError,
  FieldValues,
  FormProvider,
  useForm,
} from "react-hook-form";
import React from "react";
import { Button } from "@chakra-ui/react";
import Name from "./Name";
import Description from "./Description";
import Instruction from "./Instructions";
import {
  CreateDrinkType,
  DrinkType,
  IngredientForDrinkType,
} from "../../../types/new";
import IngredientsSelect from "./IngredientsSelect/IngredientsSelect";

export type DrinkFormValues = {
  name: string;
  ingredients: IngredientForDrinkType[];
  description: string;
  instructions: string;
};

type Props = {
  drink?: DrinkType;
  submit: (drink: any) => void;
};

const DrinkForm = (props: Props) => {
  const { drink, submit } = props;

  const methods = useForm<FieldValues>({ defaultValues: drink });

  const onSubmit = (values: DrinkFormValues) => {
    const newDrink: CreateDrinkType = values;
    console.log(values, "values");

    submit(newDrink);
  };

  console.log(methods.watch(), "watch");

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Name
          register={methods.register}
          fieldError={methods.formState.errors.name as FieldError}
        />
        <IngredientsSelect />
        <Instruction
          register={methods.register}
          fieldError={methods.formState.errors.instructions as FieldError}
        />
        <Description
          register={methods.register}
          fieldError={methods.formState.errors.description as FieldError}
        />
        <Button mt={4} colorScheme="teal" type="submit">
          Submit
        </Button>
      </form>
    </FormProvider>
  );
};

export default DrinkForm;
