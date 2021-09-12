import { Button } from "@chakra-ui/button";
import { Link } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import DrinkInfo from "../../../components/DrinkInfo";
import Header from "../../../components/Header";

const Drink = () => {
  const router = useRouter();
  const { drinkId } = router.query;

  return (
    <>
      <Header />
      {drinkId ? <DrinkInfo drinkId={drinkId as string} /> : ""}
      <Button>
        <Link href={`${router.asPath}/edit`}>Edit</Link>
      </Button>
    </>
  );
};

export default Drink;
