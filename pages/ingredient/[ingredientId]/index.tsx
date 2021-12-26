import { useRouter } from "next/router";
import Header from "../../../components/Header";
import Ingredient from "../../../components/Ingredients/Ingredient";
import LinkButton from "../../../components/LinkButton";
import Loading from "../../../components/Loading";
import { useIngredient } from "../../../supabase/ingredients";

const RoutedIngredientPage = () => {
  const router = useRouter();
  const { ingredientId } = router.query;

  if (!ingredientId || Array.isArray(ingredientId)) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <IngredientPage ingredientId={Number(ingredientId)} />
    </>
  );
};

export default RoutedIngredientPage;

const IngredientPage = (props: { ingredientId: number }) => {
  const router = useRouter();
  const { ingredientId } = props;
  const { ingredient } = useIngredient(ingredientId);

  if (!ingredient) {
    return <Loading />;
  }

  return (
    <>
      <Ingredient ingredient={ingredient} />
      <LinkButton href={`${router.asPath}/edit`}>Edit</LinkButton>
    </>
  );
};
