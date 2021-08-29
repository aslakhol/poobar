import { Table, Thead, Tr, Th, Tbody, Td, Link } from "@chakra-ui/react";

const BarList = () => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Bars</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>
            <Link href="/bar/1">Den Gode Nabo</Link>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Link href="/bar/2">Brix Brygghus</Link>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Link href="/bar/2">Lervig Local</Link>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default BarList;
