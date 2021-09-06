import { FieldErrors, useForm } from "react-hook-form";
import { FormElementInput } from "../Form/FormElement";

type Props = {
  register: ReturnType<typeof useForm>["register"];
  errors: FieldErrors;
};

const Name = (props: Props) => {
  const { register, errors } = props;
  return (
    <FormElementInput
      name={"name"}
      labelText={"Name"}
      placeholder={"Name"}
      register={register}
      errors={errors}
    />
  );
};

export default Name;
