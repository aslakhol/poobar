import { Box } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useFilter, useSelect } from "react-supabase";
import EditDrinkForm from "../../../components/CreateNewDrink/EditDrinkForm";
import ErrorOrNot from "../../../components/ErrorOrNot";
import Header from "../../../components/Header";
import { DrinkType } from "../../../types/types";

const EditDrink = () => {
  const router = useRouter();
  const { drinkId } = router.query;
  const [drink, setDrink] = useState<DrinkType>();

  const filter = useFilter((query) => query.eq("id", drinkId), [drinkId]);
  const [{ data, error }] = useSelect("drink", {
    filter,
  });

  useEffect(() => {
    if (data && data[0]) setDrink(data[0]);
  }, [data]);

  return (
    <Box>
      <Header />
      {drink ? <EditDrinkForm drink={drink} /> : ""}
      <ErrorOrNot error={error} />
    </Box>
  );
};

export default EditDrink;
