import { FieldError, useForm } from "react-hook-form";
import { FormElementInput } from "../../Form/FormElement";

type Props = {
  register: ReturnType<typeof useForm>["register"];
  fieldError: FieldError;
};

const Variant = (props: Props) => {
  const { register, fieldError } = props;
  return (
    <FormElementInput
      name={"variant"}
      labelText={"Variant"}
      placeholder={"Variant"}
      register={register}
      fieldError={fieldError}
    />
  );
};

export default Variant;
