import { Text, Button, Center, Input, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSignIn } from "react-supabase";
import ErrorOrNot from "./ErrorOrNot";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [{ error, fetching }, signIn] = useSignIn();

  const handleLogin = async (email: string) => {
    const { error } = await signIn({
      email,
    });
    if (error) console.error(error);
  };

  return (
    <Center width="100%">
      <VStack>
        <Text>Sign in via magic link with your email</Text>
        <Input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          onClick={(e) => {
            e.preventDefault();
            handleLogin(email);
          }}
          disabled={fetching}
        >
          <Text>{fetching ? "Loading" : "Send magic link"}</Text>
        </Button>
        <ErrorOrNot error={error} />
      </VStack>
    </Center>
  );
};

export default Auth;
