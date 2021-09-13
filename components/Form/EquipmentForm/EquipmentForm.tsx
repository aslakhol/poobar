import { FieldError, useForm } from "react-hook-form";
import React, { useEffect } from "react";
import { Button } from "@chakra-ui/react";
import Name from "./Name";
import { Filter, useUpsert } from "react-supabase";
import ErrorOrNot from "../../ErrorOrNot";
import { useRouter } from "next/router";
import { EquipmentType } from "../../../types/types";

type formValues = {
  name: string;
};

type Props = {
  equipment?: EquipmentType;
  triggerToast: (name: string) => void;
  filter?: Filter<any>;
};

const EquipmentForm = (props: Props) => {
  const { equipment, triggerToast, filter } = props;
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ defaultValues: equipment });

  const [{ data, error, fetching }, execute] = useUpsert("equipment", {
    filter,
  });

  useEffect(() => {
    if (!fetching && data && data[0]) {
      triggerToast(data[0].name);
      router.push(`${router.basePath}/equipment/`);
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

export default EquipmentForm;
