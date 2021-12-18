import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Link,
  IconButton,
  Td,
  Button,
} from "@chakra-ui/react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";
import { IngredientType } from "../../types/new";

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
            <NewIngredientLink />
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {ingredients.map((ingredient: IngredientType) => (
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

const NewIngredientLink = () => {
  const router = useRouter();

  return (
    <Link href={`${router.asPath}/new`}>
      <IconButton aria-label={`new ${router.asPath}`} padding="0">
        <AddIcon />
      </IconButton>
    </Link>
  );
};

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
