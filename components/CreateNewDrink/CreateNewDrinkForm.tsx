import { FieldError, useForm } from "react-hook-form";
import React from "react";
import { Button } from "@chakra-ui/react";
import Name from "./Name";
import Description from "./Description";
import Instruction from "./Instructions";

type formValues = {
  name: string;
  description: string;
  instructions: string;
};

const CreateNewDrinkForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (values: formValues) => {
    console.log("values", values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Name register={register} fieldError={errors.name as FieldError} />
      <Description
        register={register}
        fieldError={errors.description as FieldError}
      />
      <Instruction
        register={register}
        fieldError={errors.instruction as FieldError}
      />
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
};

export default CreateNewDrinkForm;
