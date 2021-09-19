import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/layout";
import ErrorOrNot from "../../ErrorOrNot";
import { useSelect } from "react-supabase";
import { Input } from "@chakra-ui/input";
import Combobox from "./ComboBox";

const NewIngredientSelect = () => {
  const [selectedIngredient, setSelectedIngredient] = useState("");
  const [{ data, error }] = useSelect("ingredient", {
    columns: "id, name",
  });

  useEffect(() => {
    console.log(selectedIngredient);
  }, [selectedIngredient]);

  const names = data?.map((ingredient) => ingredient.name);

  return (
    <Box>
      {names ? (
        <Combobox
          items={names}
          type={"Ingredient"}
          setSelected={setSelectedIngredient}
        />
      ) : (
        ""
      )}
      <ErrorOrNot error={error} />
    </Box>
  );
};

export default NewIngredientSelect;

type Item = {
  id: number;
  name: string;
};

type Props = { entities: Item[] };

const Foo = (props: Props) => {
  const { entities } = props;
  const [value, setValue] = useState("");

  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Ingredient Name"
      size="sm"
    />
  );
};
