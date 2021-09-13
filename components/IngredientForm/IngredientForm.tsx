import { FieldError, useForm } from "react-hook-form";
import React, { useEffect } from "react";
import { Button } from "@chakra-ui/react";
import Name from "./Name";
import { Filter, useUpsert } from "react-supabase";
import ErrorOrNot from "../ErrorOrNot";
import { useRouter } from "next/router";
import { IngredientType } from "../../types/types";

type formValues = {
  name: string;
};

type Props = {
  ingredient?: IngredientType;
  triggerToast: (name: string) => void;
  filter?: Filter<any>;
};

const IngredientForm = (props: Props) => {
  const { ingredient, triggerToast, filter } = props;
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ defaultValues: ingredient });

  const [{ data, error, fetching }, execute] = useUpsert("ingredient", {
    filter,
  });

  useEffect(() => {
    if (!fetching && data && data[0]) {
      triggerToast(data[0].name);
      router.push(`${router.basePath}/ingredient/`);
    }
  }, [data, fetching]);

  const onSubmit = (values: formValues) => {
    execute(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Name register={register} fieldError={errors.name as FieldError} />
      <Button mt={4} colorScheme="teal" type="submit">
        Submit
      </Button>
      <ErrorOrNot error={error} />
    </form>
  );
};

export default IngredientForm;
