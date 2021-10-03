import { Button } from "@chakra-ui/react";
import { useCombobox } from "downshift";
import React, { useEffect, useState } from "react";
import {
  Controller,
  FieldError,
  useController,
  UseControllerProps,
  useForm,
  UseFormRegister,
} from "react-hook-form";
import { Filter, useSelect } from "react-supabase";
import ErrorOrNot from "../components/ErrorOrNot";
import Header from "../components/Header";
import { DrinkType } from "../types/types";

const Test = () => {
  return (
    <>
      <Header />
      <TestForm />
    </>
  );
};

export default Test;

type Ingredients = {
  name: string;
  amount: number;
  unit: string;
};

type FormValues = {
  ingredients: string;
};

type Props = {};

const TestForm = (props: Props) => {
  const { handleSubmit, watch, control } = useForm<FormValues>();

  const [{ data, error }] = useSelect("ingredient", {
    columns: "id, name",
  });

  const onSubmit = (values: FormValues) => {
    console.log(values);
  };

  console.log(watch());

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {data ? (
        <ComboBox
          items={data}
          useControllerProps={{ control, name: "ingredients" }}
        />
      ) : (
        ""
      )}
      <Button mt={4} colorScheme="teal" type="submit">
        Submit
      </Button>
    </form>
  );
};

type ComboBoxProps = {
  items: Ingredients[];
  useControllerProps: UseControllerProps<FormValues>;
};

const ComboBox = (props: ComboBoxProps) => {
  const { items, useControllerProps } = props;
  const [inputItems, setInputItems] = useState(items);

  const { field } = useController(useControllerProps);

  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: inputItems,
    onSelectedItemChange: ({ inputValue }) => field.onChange(inputValue),
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        items.filter((item) =>
          item.name.toLowerCase().startsWith(inputValue || "".toLowerCase())
        )
      );
    },
    itemToString: (item) => (item ? item.name : ""),
  });

  return (
    <div>
      <label {...getLabelProps()}>Choose an element:</label>
      <div {...getComboboxProps()}>
        <input {...getInputProps()} />
        <button
          type="button"
          {...getToggleButtonProps()}
          aria-label="toggle menu"
        >
          &#8595;
        </button>
      </div>
      <ul {...getMenuProps()}>
        {isOpen &&
          inputItems.map((item, index) => (
            <li
              style={
                highlightedIndex === index ? { backgroundColor: "#bde4ff" } : {}
              }
              key={`${item.name}${index}`}
              {...getItemProps({ item, index })}
            >
              {item.name}
            </li>
          ))}
      </ul>
    </div>
  );
};
