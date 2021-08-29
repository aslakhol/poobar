import { Flex, Heading, Link } from "@chakra-ui/react";

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
          FooBar
        </Heading>
        <Link href="/account">Account</Link>
      </Flex>
    </Flex>
  );
};

export default Header;
