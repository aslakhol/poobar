import { DeleteIcon } from "@chakra-ui/icons";
import { Tr, Td, Link, Button } from "@chakra-ui/react";
import { Entity } from "../../types/types";

type EntityListElementProps = {
  entity: Entity;
  type: string;
  handleDelete: (id: string) => void;
};

const EntityListElement = (props: EntityListElementProps) => {
  const { entity, type, handleDelete } = props;
  const { name, id } = entity;

  return (
    <Tr>
      <Td>
        <Link href={`/${type}/${id}`}>{name}</Link>
      </Td>
      <Td>
        <Button onClick={() => handleDelete(id)} padding="0">
          <DeleteIcon />
        </Button>
      </Td>
    </Tr>
  );
};

export default EntityListElement;
