import { Table, Thead, Tr, Th, Tbody, Link, Td } from "@chakra-ui/react";
import { BarType } from "../../types/types";
import { sortByName } from "../../utils/utils";

type Props = {
  bars: BarType[];
};

const BarsList = (props: Props) => {
  const { bars } = props;

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Bars</Th>
        </Tr>
      </Thead>
      <Tbody>
        {bars.sort(sortByName).map((bar: BarType) => (
          <BarsListElement key={`bar-${bar.id}`} bar={bar} />
        ))}
      </Tbody>
    </Table>
  );
};

export default BarsList;

type BarsListElementProps = {
  bar: BarType;
};

const BarsListElement = (props: BarsListElementProps) => {
  const { bar } = props;
  const { name, id } = bar;

  return (
    <Tr>
      <Td>
        <Link href={`/bar/${id}`}>{name}</Link>
      </Td>
    </Tr>
  );
};
