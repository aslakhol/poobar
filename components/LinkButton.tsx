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
    <Link href={href} passHref>
      <Button variant="link" as="a">
        {children}
      </Button>
    </Link>
  );
};

export default LinkButton;
