import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Link,
  Td,
  Button,
  Text,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { Dispatch, SetStateAction } from "react";
import { DrinkType } from "../../types/types";
import NewLinkButton from "../NewLinkButton";
import { sortByName } from "../../utils/utils";

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
        {drinks.sort(sortByName).map((drink: DrinkType) => (
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
  const { name, id, variant } = drink;

  return (
    <Tr>
      <Td>
        <Link href={`/drink/${id}`}>{name}</Link>
        <VariantLabel variant={variant} />
      </Td>
      <Td>
        <Button onClick={() => handleDelete(id)} padding="0">
          <DeleteIcon />
        </Button>
      </Td>
    </Tr>
  );
};

const VariantLabel = (props: { variant?: string }) => {
  const { variant } = props;

  if (!variant) {
    return <></>;
  }

  return (
    <Text as="i" color="#333">
      {" "}
      - {variant}
    </Text>
  );
};
