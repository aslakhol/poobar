import { Flex, Heading, Link } from "@chakra-ui/react";
import SideBar from "./SideBar/SideBar";

const Header = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="teal.500"
      color="white"
      marginBottom="2rem"
    >
      <Flex align="center" mr={5} justify="space-between" width="100%">
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          <Link href="/">PooBar</Link>
        </Heading>
        <Link href="/account">Account</Link>
        <SideBar />
      </Flex>
    </Flex>
  );
};

export default Header;
