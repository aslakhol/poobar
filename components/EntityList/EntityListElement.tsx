import { Tr, Td, Link } from "@chakra-ui/react";
import { Entity } from "../../types/types";

type EntityListElementProps = {
  entity: Entity;
  type: string;
};

const EntityListElement = (props: EntityListElementProps) => {
  const { entity, type } = props;
  const { name, id } = entity;
  return (
    <Tr>
      <Td>
        <Link href={`/${type}/${id}`}>{name}</Link>
      </Td>
    </Tr>
  );
};

export default EntityListElement;
