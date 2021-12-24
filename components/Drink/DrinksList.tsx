import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Link,
  Td,
  Button,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { Dispatch, SetStateAction } from "react";
import { DrinkType } from "../../types/types";
import NewLinkButton from "../NewLinkButton";

type Props = {
  drinks: DrinkType[];
  setDrinks: Dispatch<SetStateAction<DrinkType[]>>;
  deleteDrink: (id: number) => void;
};

const DrinksList = (props: Props) => {
  const { drinks, setDrinks, deleteDrink } = props;

  const deleteEntity = (id: number) => {
    deleteDrink(id);
    setDrinks((prevState) => prevState.filter((drink) => drink.id !== id));
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Drinks</Th>
          <Th>
            <NewLinkButton />
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {drinks.map((drink: DrinkType) => (
          <DrinksListElement
            key={`drink-${drink.id}`}
            drink={drink}
            handleDelete={deleteEntity}
          />
        ))}
      </Tbody>
    </Table>
  );
};

export default DrinksList;

type DrinkListElementProps = {
  drink: DrinkType;
  handleDelete: (id: number) => void;
};

const DrinksListElement = (props: DrinkListElementProps) => {
  const { drink, handleDelete } = props;
  const { name, id } = drink;

  return (
    <Tr>
      <Td>
        <Link href={`/drink/${id}`}>{name}</Link>
      </Td>
      <Td>
        <Button onClick={() => handleDelete(id)} padding="0">
          <DeleteIcon />
        </Button>
      </Td>
    </Tr>
  );
};
