import {
  FieldError,
  FieldValues,
  FormProvider,
  useForm,
} from "react-hook-form";
import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import Name from "./Name";
import Description from "./Description";
import Instruction from "./Instructions";
import {
  CreateDrinkType,
  DrinkType,
  IngredientForDrinkType,
} from "../../../types/types";
import IngredientsSelect from "./IngredientsSelect/IngredientsSelect";
import { deleteIngredientForDrink } from "../../../supabase/ingredientForDrink";

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
  const [ingredientsToDelete, setIngredientsToDelete] = useState<number[]>([]);

  const methods = useForm<FieldValues>({ defaultValues: drink });

  const onSubmit = async (values: DrinkFormValues) => {
    const newDrink: CreateDrinkType = values;
    submit(newDrink);

    if (!drink) {
      return;
    }

    await deleteIngredientForDrink(ingredientsToDelete).then(() =>
      setIngredientsToDelete([])
    );
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Name
          register={methods.register}
          fieldError={methods.formState.errors.name as FieldError}
        />
        <IngredientsSelect setIngredientsToDelete={setIngredientsToDelete} />
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
