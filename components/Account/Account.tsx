import {
  Alert,
  AlertDescription,
  AlertIcon,
  Center,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import Profile from "./Profile";
import SignOut from "./SignOut";

type Props = {};

const Account = (props: Props) => {
  const { user } = useAuthContext();

  if (!user) return <NoUser />;

  return (
    <Center width="100%">
      <VStack>
        <Profile user={user} />
        <SignOut />
      </VStack>
    </Center>
  );
};

export default Account;

const NoUser = () => (
  <Alert status="error">
    <AlertIcon />
    <AlertDescription>No user found</AlertDescription>
  </Alert>
);
