import { useForm } from "react-hook-form";
import React from "react";
import { Button } from "@chakra-ui/react";
import { FormElementInput, FormElementText } from "./Form/FormElement";

type formValues = {
  name: string;
  description: string;
  instructions: string;
};

const NewDrink = () => {
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
      <FormElementInput
        name={"name"}
        labelText={"Name"}
        placeholder={"Name"}
        register={register}
        errors={errors}
      />
      <FormElementText
        name={"description"}
        labelText={"Description"}
        placeholder={"Description"}
        register={register}
        errors={errors}
      />
      <FormElementText
        name={"instructions"}
        labelText={"Instructions"}
        placeholder={"Instructions"}
        register={register}
        errors={errors}
      />
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
};

export default NewDrink;
