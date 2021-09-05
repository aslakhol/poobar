import { Box, Input } from "@chakra-ui/react";
import React from "react";

type Props = { email?: string };

const Email = (props: Props) => {
  const { email } = props;

  if (!email) return null;

  return (
    <Box>
      <label htmlFor="email">Email</label>
      <Input id="email" type="text" value={email} disabled />
    </Box>
  );
};

export default Email;
