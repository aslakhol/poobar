import { Table, Thead, Tr, Th, Tbody } from "@chakra-ui/react";
import { Entity } from "../../types/types";
import EntityListElement from "./EntityListElement";

type Props = {
  entities: any[];
  type: string;
};

const EntityList = (props: Props) => {
  const { entities, type } = props;

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>{type}</Th>
        </Tr>
      </Thead>
      <Tbody>
        {entities.map((entity: Entity) => (
          <EntityListElement
            key={`ELE-${type}-${entity.id}`}
            entity={entity}
            type={type}
          />
        ))}
      </Tbody>
    </Table>
  );
};

export default EntityList;
