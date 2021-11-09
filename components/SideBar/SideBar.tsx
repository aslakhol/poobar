import { Button, Link } from "@chakra-ui/react";
import React from "react";
import SideDrawer from "./SideDrawer";

const SideBar = () => {
  return (
    <SideDrawer>
      <LinkButton href={`/bar`} text="Bars" />
      <LinkButton href={`/drink`} text="Drinks" />
      <LinkButton href={`/ingredient`} text="Ingredients" />
      <LinkButton href={`/equipment`} text="Equipment" />
    </SideDrawer>
  );
};

export default SideBar;

type LinkButtonProps = {
  href: string;
  text: string;
};

const LinkButton = (props: LinkButtonProps) => {
  const { href, text } = props;

  return (
    <Link href={href} text="">
      <Button>{text}</Button>
    </Link>
  );
};
