// adapted from https://codesandbox.io/s/mkvj7?file=/src/Combobox.js

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useCombobox } from "downshift";
import {
  Input,
  List,
  ListItem,
  Box,
  forwardRef,
  Text,
  Button,
} from "@chakra-ui/react";
import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import { UseFormRegister } from "react-hook-form";
import { IngredientsSelectType } from "./SimpleIngredients";

type Props = {
  items: string[];
  type: string;
  setSelected: Dispatch<SetStateAction<string>>;
};

const Combobox = (props: Props) => {
  const { items, type, setSelected } = props;
  const [inputItems, setInputItems] = useState(items);
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: inputItems,
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        items.filter((item) =>
          item.toLowerCase().startsWith((inputValue || "").toLowerCase())
        )
      );
    },
  });

  useEffect(() => {
    if (selectedItem) setSelected(selectedItem);
  }, [selectedItem]);

  return (
    <Box>
      <Text as="label" fontSize="lg" {...getLabelProps()}>
        {type}
      </Text>
      <Box {...getComboboxProps()}>
        <Box>
          <ComboboxInput
            {...getInputProps()}
            placeholder="Search..."
            flex="0 0 auto"
            width={500}
            mt={3}
          />
          <Button
            {...getToggleButtonProps()}
            aria-label={"toggle menu"}
            variantcolor={isOpen ? "gray" : "teal"}
          >
            {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </Button>
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
              key={index}
            >
              {item}
            </ComboboxItem>
          ))}
        </ComboboxList>
      </Box>
    </Box>
  );
};

export default Combobox;

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
