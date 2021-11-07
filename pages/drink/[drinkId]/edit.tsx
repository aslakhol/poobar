import { Box } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import EditDrinkForm from "../../../components/Form/DrinkForm/EditDrinkForm";
import ErrorOrNot from "../../../components/ErrorOrNot";
import Header from "../../../components/Header";
import { DrinkType } from "../../../types/types";
import { Spinner } from "@chakra-ui/spinner";
import { useDrink } from "../../../utils/supaHooks";

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

  const [{ data, error }] = useDrink(drinkId);

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
