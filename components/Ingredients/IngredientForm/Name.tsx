import { FieldError, useForm } from "react-hook-form";
import { FormElementInput } from "../../Form/FormElement";

type Props = {
  register: ReturnType<typeof useForm>["register"];
  fieldError: FieldError;
};

const Name = (props: Props) => {
  const { register, fieldError } = props;
  return (
    <FormElementInput
      name={"name"}
      labelText={"Name"}
      placeholder={"Name"}
      register={register}
      fieldError={fieldError}
      required
    />
  );
};

export default Name;
