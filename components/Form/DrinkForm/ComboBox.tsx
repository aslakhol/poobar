import { Box, forwardRef, Input, List, ListItem, Text } from "@chakra-ui/react";
import { useCombobox } from "downshift";
import React, { useState } from "react";
import { useController, UseControllerProps } from "react-hook-form";

type FormValues = {
  ingredients: string;
};

type ItemType = {
  name: string;
};

type ComboBoxProps = {
  items: ItemType[];
  labelText: string;
  useControllerProps: UseControllerProps<FormValues>;
};

const ComboBox = (props: ComboBoxProps) => {
  const { items, useControllerProps, labelText } = props;
  const [inputItems, setInputItems] = useState(items);

  const { field } = useController(useControllerProps);

  const {
    isOpen,
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
          item.name.toLowerCase().includes(inputValue || "".toLowerCase())
        )
      );
    },
    itemToString: (item) => (item ? item.name : ""),
  });

  return (
    <Box>
      <Text as="label" fontSize="lg" {...getLabelProps()}>
        {labelText}
      </Text>
      <Box {...getComboboxProps()}>
        <ComboboxInput
          {...getInputProps()}
          placeholder="Search..."
          flex="0 0 auto"
          width={500}
          mt={3}
        />
      </Box>
      <ComboboxList
        isOpen={isOpen}
        {...getMenuProps()}
        flex={1}
        overflowY="auto"
        mt={0}
      >
        {inputItems.map((item, index) => (
          <ComboboxItem
            {...getItemProps({ item, index })}
            itemIndex={index}
            highlightedIndex={highlightedIndex}
            key={`${item.name}${index}`}
          >
            {item.name}
          </ComboboxItem>
        ))}
      </ComboboxList>
    </Box>
  );
};

const ComboboxInput = forwardRef(({ ...props }, ref) => {
  return <Input {...props} ref={ref} />;
});

const ComboboxList = forwardRef(({ isOpen, ...props }, ref) => {
  return <List display={isOpen ? "" : "none"} py={2} {...props} ref={ref} />;
});

const ComboboxItem = forwardRef(
  ({ itemIndex, highlightedIndex, ...props }, ref) => {
    const isActive = itemIndex === highlightedIndex;

    return (
      <ListItem
        transition="background-color 220ms, color 220ms"
        bg={isActive ? "teal.100" : ""}
        px={4}
        py={2}
        cursor="pointer"
        {...props}
        ref={ref}
      />
    );
  }
);

export default ComboBox;
