import { Table, Thead, Tr, Th, Tbody, Link, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

import { useRouter } from "next/router";
import { Entity } from "../../types/types";
import EntityListElement from "./EntityListElement";
import { useDelete } from "react-supabase";
import { useState } from "react";

type Props = {
  entities: any[];
  type: string;
};

const EntityList = (props: Props) => {
  const { entities, type } = props;
  const router = useRouter();
  const [entityList, setEntityList] = useState(entities);

  const [{}, execute] = useDelete(type);

  const deleteEntity = (id: number) => {
    setEntityList((prevState) =>
      prevState.filter((entity) => entity.id !== id)
    );
    execute((query) => query.eq("id", id));
  };

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
        {entityList.map((entity: Entity) => (
          <EntityListElement
            key={`ELE-${type}-${entity.id}`}
            entity={entity}
            type={type}
            handleDelete={deleteEntity}
          />
        ))}
      </Tbody>
    </Table>
  );
};

export default EntityList;
