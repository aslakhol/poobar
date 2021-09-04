import React from "react";
import type { NextPage } from "next";
import Header from "../components/Header";
import { Link } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Button>
        <Link href={`/bars`}>Bars</Link>
      </Button>
      <Button>
        <Link href={`/drinks`}>Drinks</Link>
      </Button>
      <Button>
        <Link href={`/ingredients`}>Ingredients</Link>
      </Button>
      <Button>
        <Link href={`/equipment`}>Equipment</Link>
      </Button>
    </>
  );
};

export default Home;
