import { Button, Link } from "@chakra-ui/react";
import React from "react";
import SideDrawer from "./SideDrawer";

const SideBar = () => {
  return (
    <SideDrawer>
      <Link href={`/bar`}>
        <Button>Bars</Button>
      </Link>
      <Link href={`/drink`}>
        <Button>Drinks</Button>
      </Link>

      <Link href={`/ingredient`}>
        <Button>Ingredients</Button>
      </Link>
      <Link href={`/equipment`}>
        <Button>Equipment</Button>
      </Link>
    </SideDrawer>
  );
};

export default SideBar;
