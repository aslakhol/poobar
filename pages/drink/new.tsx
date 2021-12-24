import CreateDrinkForm from "../../components/Drink/DrinkForm/CreateDrinkForm";
import Header from "../../components/Header";
import { createDrink } from "../../supabase/drinks";
import { CreateDrinkType } from "../../types/types";

const NewDrinkPage = () => {
  const create = (drink: CreateDrinkType) => createDrink(drink);

  return (
    <>
      <Header />
      <CreateDrinkForm createDrink={create} />
    </>
  );
};

export default NewDrinkPage;
