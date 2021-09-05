import { Button } from "@chakra-ui/react";
import React from "react";
import { useSignOut } from "react-supabase";

const SignOut = () => {
  const [{ error, fetching }, signOut] = useSignOut();

  const handleSignOut = () => {
    signOut();
  };

  return <Button onClick={() => handleSignOut()}>Sign Out</Button>;
};

export default SignOut;
