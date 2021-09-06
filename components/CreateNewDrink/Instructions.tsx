import { FieldErrors, useForm } from "react-hook-form";
import { FormElementText } from "../Form/FormElement";

type Props = {
  register: ReturnType<typeof useForm>["register"];
  errors: FieldErrors;
};

const Instruction = (props: Props) => {
  const { register, errors } = props;

  return (
    <FormElementText
      name={"instruction"}
      labelText={"Instruction"}
      placeholder={"Instruction"}
      register={register}
      errors={errors}
    />
  );
};

export default Instruction;
