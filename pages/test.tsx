import { Button, Spinner } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { useSelect } from "react-supabase";
import ComboBox from "../components/Form/DrinkForm/ComboBox";
import Header from "../components/Header";

const Test = () => {
  return (
    <>
      <Header />
      <TestForm />
    </>
  );
};

export default Test;

type FormValues = {
  ingredients: string;
};

type Props = {};

const TestForm = (props: Props) => {
  const { handleSubmit, control } = useForm<FormValues>();

  const [{ data, error }] = useSelect("ingredient", {
    columns: "id, name",
  });

  if (!data) return <Spinner />;

  const onSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ComboBox
        items={data}
        labelText="Ingredients"
        useControllerProps={{ control, name: "ingredients" }}
      />
      <Button mt={4} colorScheme="teal" type="submit">
        Submit
      </Button>
    </form>
  );
};
