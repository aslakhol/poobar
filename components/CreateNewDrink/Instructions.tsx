import { FieldError, useForm } from "react-hook-form";
import { FormElementText } from "../Form/FormElement";

type Props = {
  register: ReturnType<typeof useForm>["register"];
  fieldError: FieldError;
};

const Instruction = (props: Props) => {
  const { register, fieldError } = props;

  return (
    <FormElementText
      name={"instructions"}
      labelText={"Instruction"}
      placeholder={"Instruction"}
      register={register}
      required
      fieldError={fieldError}
    />
  );
};

export default Instruction;
