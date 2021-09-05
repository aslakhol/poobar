import {
  Text,
  Button,
  Center,
  Input,
  VStack,
  AlertIcon,
  Alert,
  AlertDescription,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useSignIn } from "react-supabase";

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
          <span>{fetching ? "Loading" : "Send magic link"}</span>
        </Button>
        {error ? <Error error={error} /> : ""}
      </VStack>
    </Center>
  );
};

export default Auth;

const Error = (props: { error: Error }) => {
  const { error } = props;
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertDescription>{error.message}</AlertDescription>
    </Alert>
  );
};
