import { Alert, AlertIcon, AlertDescription } from "@chakra-ui/alert";
import { PostgrestError } from "@supabase/postgrest-js";
import React from "react";

type Props = {
  error: Error | PostgrestError | null | undefined;
};

const ErrorOrNot = (props: Props) => {
  const { error } = props;

  if (!error) return null;

  return (
    <Alert status="error">
      <AlertIcon />
      <AlertDescription>{error.message}</AlertDescription>
    </Alert>
  );
};

export default ErrorOrNot;
