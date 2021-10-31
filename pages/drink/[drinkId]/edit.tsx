import { Box } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useFilter, useSelect } from "react-supabase";
import EditDrinkForm from "../../../components/Form/DrinkForm/EditDrinkForm";
import ErrorOrNot from "../../../components/ErrorOrNot";
import Header from "../../../components/Header";
import { DrinkType } from "../../../types/types";
import { Spinner } from "@chakra-ui/spinner";

const RoutedEditDrink = () => {
  const router = useRouter();

  const { drinkId } = router.query;

  if (!drinkId || Array.isArray(drinkId)) return <Spinner />;

  return <EditDrinkPage drinkId={drinkId} />;
};

export default RoutedEditDrink;

const EditDrinkPage = (props: { drinkId: string }) => {
  const { drinkId } = props;

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
