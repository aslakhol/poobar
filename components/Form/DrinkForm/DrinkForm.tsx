import { FieldError, useForm } from "react-hook-form";
import React, { useEffect } from "react";
import { Button } from "@chakra-ui/react";
import Name from "./Name";
import Description from "./Description";
import Instruction from "./Instructions";
import { Filter, useUpsert } from "react-supabase";
import ErrorOrNot from "../../ErrorOrNot";
import { useRouter } from "next/router";
import { DrinkType } from "../../../types/types";
import IngredientSelect from "./IngredientSelect";
import Ingredients from "./Ingredients";
import SimpleIngredients from "./SimpleIngredients";

type formValues = {
  name: string;
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

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ defaultValues: drink });

  const [{ data, error, fetching }, execute] = useUpsert("drink", { filter });

  useEffect(() => {
    if (!fetching && data && data[0]) {
      triggerToast(data[0].name);
      router.push(`${router.basePath}/drink/`);
    }
  }, [data, fetching]);

  const onSubmit = (values: formValues) => {
    execute(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Name register={register} fieldError={errors.name as FieldError} />
      <SimpleIngredients />
      <Instruction
        register={register}
        fieldError={errors.instructions as FieldError}
      />
      <Description
        register={register}
        fieldError={errors.description as FieldError}
      />
      <Button mt={4} colorScheme="teal" type="submit">
        Submit
      </Button>
      <ErrorOrNot error={error} />
    </form>
  );
};

export default DrinkForm;
