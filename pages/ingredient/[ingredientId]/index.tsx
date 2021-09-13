import { useRouter } from "next/router";
import Header from "../../../components/Header";

const Ingredient = () => {
  const router = useRouter();
  const { ingredientId } = router.query;

  return (
    <>
      <Header />
      <p>Ingredient: {ingredientId}</p>
    </>
  );
};

export default Ingredient;
