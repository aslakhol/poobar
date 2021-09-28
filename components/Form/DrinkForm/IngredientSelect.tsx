import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/layout";
import ErrorOrNot from "../../ErrorOrNot";
import { useSelect } from "react-supabase";
import Combobox from "./ComboBox";
import { IngredientType } from "../../../types/types";

type Props = {
  selectIngredient: (ingredient: IngredientType) => void;
  selectedIngredients: IngredientType[];
};

const IngredientSelect = (props: Props) => {
  const { selectIngredient, selectedIngredients } = props;
  const [selectedIngredientName, setSelectedIngredientName] = useState("");
  const [{ data, error }] = useSelect("ingredient", {
    columns: "id, name",
  });

  useEffect(() => {
    const selected = data?.find((i) => i.name === selectedIngredientName);

    if (selected) selectIngredient(selected);
  }, [selectedIngredientName]);

  console.log(selectedIngredients);

  const selectedIngredientNames = selectedIngredients.map((i) => i.name);

  const names = data
    ?.map((ingredient) => ingredient.name)
    .filter((name) => !selectedIngredientNames.includes(name));

  return (
    <Box>
      {names ? (
        <Combobox
          items={names}
          type={"Ingredient"}
          setSelected={setSelectedIngredientName}
        />
      ) : (
        ""
      )}
      <ErrorOrNot error={error} />
    </Box>
  );
};

export default IngredientSelect;
