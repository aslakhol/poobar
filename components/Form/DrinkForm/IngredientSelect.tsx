import React, { useEffect, useState } from "react";
import { CUIAutoComplete } from "chakra-ui-autocomplete";
import { useSelect } from "react-supabase";
import { Box } from "@chakra-ui/layout";
import ErrorOrNot from "../../ErrorOrNot";

const IngredientSelect = () => {
  const [ingredients, setIngredients] = useState<Item[]>([]);

  const [{ data, error }] = useSelect("ingredient", {
    columns: "id, name",
  });

  useEffect(() => {
    if (data) {
      const adaptedData = data.map((dataPoint) => ({
        label: dataPoint.name,
        value: dataPoint.id,
      }));

      setIngredients(adaptedData);
    }
  }, [data]);

  return (
    <Box>
      {ingredients.length ? <EntitySelect entities={ingredients} /> : ""}
      <ErrorOrNot error={error} />
    </Box>
  );
};

type Item = {
  label: string;
  value: string;
};

type Props = { entities: Item[] };

const EntitySelect = (props: Props) => {
  const { entities } = props;
  const [pickerItems, setPickerItems] = useState<Item[]>(entities);
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);

  const handleCreateItem = (item: Item) => {
    // handle creating items on submit
    setPickerItems((curr) => [...curr, item]);
    setSelectedItems((curr) => [...curr, item]);
  };

  const handleSelectedItemsChange = (selectedItems?: Item[]) => {
    if (selectedItems) {
      setSelectedItems(selectedItems);
    }
  };

  return (
    <Box>
      <CUIAutoComplete
        label="Ingredients"
        placeholder="Ingredient"
        onCreateItem={handleCreateItem}
        items={pickerItems}
        selectedItems={selectedItems}
        onSelectedItemsChange={(changes) =>
          handleSelectedItemsChange(changes.selectedItems)
        }
      />
    </Box>
  );
};

export default IngredientSelect;
