import { FieldErrors, useForm } from "react-hook-form";
import { FormElementText } from "../Form/FormElement";

type Props = {
  register: ReturnType<typeof useForm>["register"];
  errors: FieldErrors;
};

const Description = (props: Props) => {
  const { register, errors } = props;

  return (
    <FormElementText
      name={"description"}
      labelText={"Description"}
      placeholder={"Description"}
      register={register}
      errors={errors}
    />
  );
};

export default Description;
