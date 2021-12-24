import { useRouter } from "next/router";
import EditDrinkForm from "../../../components/Drink/DrinkForm/EditDrinkForm";
import Header from "../../../components/Header";
import { updateDrink, useDrink } from "../../../supabase/drinks";
import Loading from "../../../components/Loading";
import { DrinkType } from "../../../types/new";

const RoutedEditDrink = () => {
  const router = useRouter();

  const { drinkId } = router.query;

  if (!drinkId || Array.isArray(drinkId)) {
    return <Loading />;
  }

  return <EditDrinkPage drinkId={Number(drinkId)} />;
};

export default RoutedEditDrink;

const EditDrinkPage = (props: { drinkId: number }) => {
  const { drinkId } = props;
  const { drink } = useDrink(drinkId);
  const editDrink = (drink: DrinkType) => {
    return updateDrink(drink);
  };

  if (!drink) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <EditDrinkForm drink={drink} updateDrink={editDrink} />
    </>
  );
};
