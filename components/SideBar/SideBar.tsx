import { Button, Link } from "@chakra-ui/react";
import React from "react";
import SideDrawer from "./SideDrawer";

const SideBar = () => {
  return (
    <SideDrawer>
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
    </SideDrawer>
  );
};

export default SideBar;
