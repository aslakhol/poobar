import { useRouter } from "next/router";
import DrinkInfo from "../../../components/Drink/DrinkInfo";
import Header from "../../../components/Header";
import LinkButton from "../../../components/LinkButton";
import Loading from "../../../components/Loading";
import { useDrink } from "../../../supabase/drinks";

const RoutedDrinkPage = () => {
  const router = useRouter();
  const { drinkId } = router.query;

  if (!drinkId || Array.isArray(drinkId)) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <DrinkPage drinkId={Number(drinkId)} />
    </>
  );
};

export default RoutedDrinkPage;

const DrinkPage = (props: { drinkId: number }) => {
  const router = useRouter();
  const { drinkId } = props;
  const { drink } = useDrink(drinkId);

  if (!drink) {
    return <Loading />;
  }

  return (
    <>
      <DrinkInfo drink={drink} />
      <LinkButton href={`${router.asPath}/edit`}>Edit</LinkButton>
    </>
  );
};
