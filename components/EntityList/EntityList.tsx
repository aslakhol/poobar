import { Table, Thead, Tr, Th, Tbody, Link, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

import { useRouter } from "next/router";
import { Entity } from "../../types/types";
import EntityListElement from "./EntityListElement";

type Props = {
  entities: any[];
  type: string;
};

const EntityList = (props: Props) => {
  const { entities, type } = props;
  const router = useRouter();

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>{type}</Th>
          <Th>
            <Button padding="0">
              <Link href={`${router.asPath}/new`}>
                <AddIcon />
              </Link>
            </Button>
          </Th>
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
