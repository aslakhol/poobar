import { FieldError, useForm } from "react-hook-form";
import { FormElementText } from "../../Form/FormElement";

type Props = {
  register: ReturnType<typeof useForm>["register"];
  fieldError: FieldError;
};

const Description = (props: Props) => {
  const { register, fieldError } = props;

  return (
    <FormElementText
      name={"description"}
      labelText={"Description"}
      placeholder={"Description"}
      register={register}
      fieldError={fieldError}
    />
  );
};

export default Description;
