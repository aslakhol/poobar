import { VStack } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { useFilter, useSelect } from "react-supabase";
import ErrorOrNot from "./ErrorOrNot";

const dummyDrink = { name: "", description: "", instructions: "" };

type Props = { drinkId: string };

const DrinkInfo = (props: Props) => {
  const { drinkId } = props;
  const [drink, setDrink] = useState(dummyDrink);

  const filter = useFilter((query) => query.eq("id", drinkId), [drinkId]);
  const [{ data, error }] = useSelect("drink", {
    filter,
  });

  useEffect(() => {
    if (data && data[0]) setDrink(data[0]);
  }, [data]);

  return (
    <VStack>
      <p>Id: {drinkId}</p>
      <p>Name: {drink.name}</p>
      <p>Description: {drink.description}</p>
      <p>Instructions: {drink.instructions}</p>
      <ErrorOrNot error={error} />
    </VStack>
  );
};

export default DrinkInfo;
