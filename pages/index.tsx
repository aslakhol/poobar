import React from "react";
import type { NextPage } from "next";
import Header from "../components/Header";
import { Link } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { VStack } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <VStack>
        <Button>
          <Link href={`/bar`}>Bars</Link>
        </Button>
        <Button>
          <Link href={`/drink`}>Drinks</Link>
        </Button>
        <Button>
          <Link href={`/ingredient`}>Ingredients</Link>
        </Button>
        <Button>
          <Link href={`/equipment`}>Equipment</Link>
        </Button>
      </VStack>
    </>
  );
};

export default Home;
