import { Link } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import React from "react";

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
};

const LinkButton = (props: LinkButtonProps) => {
  const { href, children } = props;

  return (
    <Button variant="link">
      <Link href={href}>{children}</Link>
    </Button>
  );
};

export default LinkButton;
