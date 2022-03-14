import { FieldError, useForm } from "react-hook-form";
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
  fieldError: FieldError;
  children: React.ReactNode;
};

const FormElementWrapper = (props: FormElementWrapperProps) => {
  const { name, labelText, fieldError, children } = props;

  return (
    <FormControl isInvalid={hasError(fieldError)}>
      <FormLabel id={`${name}-label`} htmlFor={name}>
        {labelText}
      </FormLabel>
      {children}
      {fieldError && (
        <FormErrorMessage>
          <Text>{fieldError.message}</Text>
          <Text>
            {fieldError.type === "required" && "This field is required"}
          </Text>
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
  fieldError: FieldError;
  required?: boolean;
};

export const FormElementInput = (props: FormElementBodyProps) => {
  const { name, placeholder, labelText, register, fieldError, required } =
    props;
  return (
    <FormElementWrapper
      name={name}
      labelText={labelText}
      fieldError={fieldError}
    >
      <Input
        id={name}
        placeholder={placeholder}
        {...register(name, { required })}
      />
    </FormElementWrapper>
  );
};

export const FormElementText = (props: FormElementBodyProps) => {
  const { name, placeholder, labelText, register, fieldError, required } =
    props;
  return (
    <FormElementWrapper
      name={name}
      labelText={labelText}
      fieldError={fieldError}
    >
      <Textarea
        id={name}
        placeholder={placeholder}
        {...register(name, { required })}
      />
    </FormElementWrapper>
  );
};

const hasError = (fieldError?: FieldError) => (fieldError ? true : false);
