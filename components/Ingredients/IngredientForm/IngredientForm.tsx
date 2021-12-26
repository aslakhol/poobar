import { FieldError, FieldValues, useForm } from "react-hook-form";
import React from "react";
import { Button } from "@chakra-ui/react";
import Name from "./Name";
import { CreateIngredientType, IngredientType } from "../../../types/types";
import Description from "./Description";

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

  const onSubmit = (values: CreateIngredientType) => {
    const newIngredient = values;
    submit(newIngredient);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Name register={register} fieldError={errors.name as FieldError} />
      <Description
        register={register}
        fieldError={errors.description as FieldError}
      />
      <Button mt={4} colorScheme="teal" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default IngredientForm;
