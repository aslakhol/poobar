import { Box, Button } from "@chakra-ui/react";
import { User } from "@supabase/supabase-js";
import React from "react";
import { useFilter, useUpsert } from "react-supabase";
import ErrorOrNot from "../ErrorOrNot";

type Props = {
  user: User;
  username: string;
};

const UpdateProfileButton = (props: Props) => {
  const { user, username } = props;
  const filter = useFilter((query) => query.eq("id", user.id), [user]);

  const [{ error, fetching }, execute] = useUpsert("profile", {
    options: { returning: "minimal" },
    filter,
  });

  const handleUpdate = async () => {
    await execute({ username, id: user.id });
  };

  return (
    <>
      <Button onClick={handleUpdate} disabled={false}>
        {fetching ? "Loading ..." : "Update"}
      </Button>
      <ErrorOrNot error={error} />
    </>
  );
};

export default UpdateProfileButton;
