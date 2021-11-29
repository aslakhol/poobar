import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Text,
  forwardRef,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  List,
  ListItem,
} from "@chakra-ui/react";
import { useCombobox, UseComboboxStateChange } from "downshift";
import React, { useState } from "react";
import LinkButton from "../LinkButton";

type ItemType = {
  name: string;
};

type ComboBoxProps = {
  items: ItemType[];
  submit: () => void;
  onSelectedItemChange: (changes: UseComboboxStateChange<ItemType>) => void;
};

const ComboBox = (props: ComboBoxProps) => {
  const { items, onSelectedItemChange, submit } = props;
  const [inputItems, setInputItems] = useState(items);

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: inputItems,
    onSelectedItemChange: onSelectedItemChange,
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        items.filter((item) =>
          item.name.toLowerCase().includes(inputValue || "".toLowerCase())
        )
      );
    },
    itemToString: (item) => (item ? item.name : ""),
  });

  const noResultFromSearch = () => {
    if (inputItems.length === 0 && isOpen) {
      return (
        <ListItem px={4} py={2}>
          <LinkButton href={"/drink/new"}>
            <Text>We can\'t find anything with that name, create new?</Text>
          </LinkButton>
        </ListItem>
      );
    }
  };

  const searchResults = () => {
    return inputItems.map((item, index) => (
      <ComboboxItem
        {...getItemProps({ item, index })}
        itemIndex={index}
        highlightedIndex={highlightedIndex}
        key={`${item.name}-${index}`}
      >
        {item.name}
      </ComboboxItem>
    ));
  };

  return (
    <Box>
      <Box {...getComboboxProps()}>
        {submit ? (
          <ComboboxInputWithButton
            {...getInputProps()}
            placeholder="Search..."
            flex="0 0 auto"
            width={500}
            submit={submit}
          />
        ) : (
          <ComboboxInput
            {...getInputProps()}
            placeholder="Search..."
            flex="0 0 auto"
            width={500}
          />
        )}
      </Box>
      <ComboboxList
        isOpen={isOpen}
        {...getMenuProps()}
        flex={1}
        overflowY="auto"
        mt={0}
      >
        {searchResults()}
        {noResultFromSearch()}
      </ComboboxList>
    </Box>
  );
};

const ComboboxInputWithButton = forwardRef(({ ...props }, ref) => {
  const { submit, ...rest } = props;
  return (
    <InputGroup>
      <Input {...rest} ref={ref} />
      <InputRightElement>
        <IconButton
          size="sm"
          aria-label="Add drink to bar"
          icon={<AddIcon />}
          onClick={submit}
        />
      </InputRightElement>
    </InputGroup>
  );
});

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
