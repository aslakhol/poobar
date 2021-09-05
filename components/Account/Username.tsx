import { Box, Input } from "@chakra-ui/react";
import React from "react";

type Props = {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
};

const Username = (props: Props) => {
  const { username, setUsername } = props;

  return (
    <Box>
      <label htmlFor="username">Name</label>
      <Input
        id="username"
        type="text"
        value={username || ""}
        onChange={(e) => setUsername(e.target.value)}
      />
    </Box>
  );
};

export default Username;
