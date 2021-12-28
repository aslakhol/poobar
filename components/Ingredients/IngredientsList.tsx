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
import { IngredientType } from "../../types/types";
import NewLinkButton from "../NewLinkButton";
import { sortByName } from "../../utils/utils";

type Props = {
  ingredients: IngredientType[];
  setIngredients: Dispatch<SetStateAction<IngredientType[]>>;
  deleteIngredient: (id: number) => void;
};

const IngredientsList = (props: Props) => {
  const { ingredients, setIngredients, deleteIngredient } = props;

  const deleteEntity = (id: number) => {
    deleteIngredient(id);
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient.id !== id)
    );
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Ingredients</Th>
          <Th>
            <NewLinkButton />
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {ingredients.sort(sortByName).map((ingredient: IngredientType) => (
          <IngredientsListElement
            key={`ingredient-${ingredient.id}`}
            ingredient={ingredient}
            handleDelete={deleteEntity}
          />
        ))}
      </Tbody>
    </Table>
  );
};

export default IngredientsList;

type IngredientsListElementProps = {
  ingredient: IngredientType;
  handleDelete: (id: number) => void;
};

const IngredientsListElement = (props: IngredientsListElementProps) => {
  const { ingredient, handleDelete } = props;
  const { name, id } = ingredient;

  return (
    <Tr>
      <Td>
        <Link href={`/ingredient/${id}`}>{name}</Link>
      </Td>
      <Td>
        <Button onClick={() => handleDelete(id)} padding="0">
          <DeleteIcon />
        </Button>
      </Td>
    </Tr>
  );
};
