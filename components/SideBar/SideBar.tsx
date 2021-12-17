import React from "react";
import LinkButton from "../LinkButton";
import SideDrawer from "./SideDrawer";

const SideBar = () => {
  return (
    <SideDrawer>
      <LinkButton href={`/bar`}>Bars</LinkButton>
      <LinkButton href={`/drink`}>Drinks</LinkButton>
      <LinkButton href={`/ingredient`}>Ingredients</LinkButton>
    </SideDrawer>
  );
};

export default SideBar;
