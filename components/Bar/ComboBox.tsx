import { ArrowDownIcon } from "@chakra-ui/icons";
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
import { useCombobox } from "downshift";
import React, { useState } from "react";
import LinkButton from "../LinkButton";

type ItemType = {
  name: string;
  id: number;
};

type ComboBoxProps = {
  items: ItemType[];
  onSelectedItemChange: (selectedItem: ItemType | undefined) => void;
};

const ComboBox = (props: ComboBoxProps) => {
  const { items, onSelectedItemChange } = props;
  const [inputItems, setInputItems] = useState(items);

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
    getToggleButtonProps,
  } = useCombobox({
    items: inputItems,
    onSelectedItemChange: ({ inputValue }) => {
      const selectedItem = items.find((item) => item.name === inputValue);
      return onSelectedItemChange(selectedItem);
    },
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
            <Text>We can&apos;t find anything with that name, create new?</Text>
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
        <ComboboxInputWithButton
          {...getInputProps()}
          getToggleButtonProps={getToggleButtonProps}
          placeholder="Search..."
          flex="0 0 auto"
          width={500}
        />
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
  const { getToggleButtonProps, ...rest } = props;
  return (
    <InputGroup>
      <Input {...rest} ref={ref} />
      <InputRightElement>
        <IconButton
          {...getToggleButtonProps()}
          size="sm"
          aria-label="Add drink to bar"
          icon={<ArrowDownIcon />}
        />
      </InputRightElement>
    </InputGroup>
  );
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
