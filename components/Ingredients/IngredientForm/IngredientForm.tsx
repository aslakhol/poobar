import { FieldError, FieldValues, useForm } from "react-hook-form";
import React from "react";
import { Button } from "@chakra-ui/react";
import Name from "./Name";
import { IngredientType } from "../../../types/new";

type IngredientFormValues = {
  name: string;
};

type Props = {
  ingredient?: IngredientType;
  submit: (ingredient: any) => void;
};

const IngredientForm = (props: Props) => {
  const { ingredient, submit } = props;

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FieldValues>({ defaultValues: ingredient });

  const onSubmit = (values: IngredientFormValues) => {
    const newIngredient = {
      id: ingredient?.id ?? undefined,
      name: values.name,
    };
    submit(newIngredient);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Name register={register} fieldError={errors.name as FieldError} />
      <Button mt={4} colorScheme="teal" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default IngredientForm;
