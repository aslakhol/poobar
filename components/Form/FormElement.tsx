import { FieldErrors, useForm } from "react-hook-form";
import React from "react";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";

type FormElementWrapperProps = {
  name: string;
  labelText: string;
  errors: FieldErrors;
  children: React.ReactNode;
};

const FormElementWrapper = (props: FormElementWrapperProps) => {
  const { name, labelText, errors, children } = props;
  return (
    <FormControl isInvalid={errors.name}>
      <FormLabel id={`${name}-label`} htmlFor={name}>
        {labelText}
      </FormLabel>
      {children}
      {errors && (
        <FormErrorMessage>
          <Text>{errors.message}</Text>
          <Text>{errors.type === "required" && "This field is required"}</Text>
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export default FormElementWrapper;

type FormElementBodyProps = {
  name: string;
  placeholder: string;
  labelText: string;
  register: ReturnType<typeof useForm>["register"];
  errors: FieldErrors;
};

export const FormElementInput = (props: FormElementBodyProps) => {
  const { name, placeholder, labelText, register, errors } = props;
  return (
    <FormElementWrapper name={name} labelText={labelText} errors={errors}>
      <Input
        id={name}
        placeholder={placeholder}
        {...register(name, {
          required: "This is required",
        })}
      />
    </FormElementWrapper>
  );
};

export const FormElementText = (props: FormElementBodyProps) => {
  const { name, placeholder, labelText, register, errors } = props;
  return (
    <FormElementWrapper name={name} labelText={labelText} errors={errors}>
      <Textarea
        id={name}
        placeholder={placeholder}
        {...register(name, {
          required: "This is required",
        })}
      />
    </FormElementWrapper>
  );
};
