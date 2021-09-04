import { useRouter } from "next/router";
import Header from "../../components/Header";

const Drink = () => {
  const router = useRouter();
  const { drinkId } = router.query;

  return (
    <>
      <Header />
      <p>Drink: {drinkId}</p>
    </>
  );
};

export default Drink;
