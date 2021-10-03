import { FieldError, FormProvider, useForm } from "react-hook-form";
import React, { useEffect } from "react";
import { Button } from "@chakra-ui/react";
import Name from "./Name";
import Description from "./Description";
import Instruction from "./Instructions";
import { Filter, useUpsert } from "react-supabase";
import ErrorOrNot from "../../ErrorOrNot";
import { useRouter } from "next/router";
import { DrinkType } from "../../../types/types";
import SimpleIngredients from "./SimpleIngredients";

export type Ingredient = {
  name: string;
  amount: number;
  unit: string;
};

export type DrinkFormValues = {
  name: string;
  ingredients: Ingredient[];
  description: string;
  instructions: string;
};

type Props = {
  drink?: DrinkType;
  triggerToast: (name: string) => void;
  filter?: Filter<any>;
};

const DrinkForm = (props: Props) => {
  const { drink, triggerToast, filter } = props;
  const router = useRouter();

  const methods = useForm({ defaultValues: drink });

  const [{ data, error, fetching }, execute] = useUpsert("drink", { filter });

  useEffect(() => {
    if (!fetching && data && data[0]) {
      triggerToast(data[0].name);
      router.push(`${router.basePath}/drink/`);
    }
  }, [data, fetching]);

  const onSubmit = (values: DrinkFormValues) => {
    execute(values);
  };

  console.log(methods.watch());

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Name
          register={methods.register}
          fieldError={methods.formState.errors.name as FieldError}
        />
        <SimpleIngredients />
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
        <ErrorOrNot error={error} />
      </form>
    </FormProvider>
  );
};

export default DrinkForm;
