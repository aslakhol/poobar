import { User } from "@supabase/gotrue-js";
import React, { useState, useEffect } from "react";
import { useFilter, useSelect } from "react-supabase";
import ErrorOrNot from "../ErrorOrNot";
import Email from "./Email";
import UpdateProfileButton from "./UpdateProfileButton";
import Username from "./Username";

type Props = { user: User };

const Profile = (props: Props) => {
  const { user } = props;
  const [username, setUsername] = useState("");

  const filter = useFilter((query) => query.eq("id", user.id), [user]);
  const [{ data, error, fetching }] = useSelect("profile", {
    columns: "username",
    filter,
  });

  useEffect(() => {
    setUsername(data ? data[0].username : "");
  }, [data]);

  return (
    <>
      <Email email={user.email} />
      <Username username={username} setUsername={setUsername} />
      <UpdateProfileButton user={user} username={username} />
      <ErrorOrNot error={error} />
    </>
  );
};

export default Profile;
