import { Box, Button, Center, Input, VStack } from "@chakra-ui/react";
import { Session } from "@supabase/supabase-js";
import React, { useState, useEffect } from "react";
import { supabase } from "../utils/superbaseClient";

type Props = { session: Session };

const Account = (props: Props) => {
  const { session } = props;
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState<string | undefined>(undefined);

  useEffect(() => {
    getProfile();
  }, [session]);

  const getProfile = async () => {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      const { data, error, status } = await supabase
        .from("profile")
        .select(`username`)
        .eq("id", user?.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
      }
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async ({
    username,
  }: {
    username: string | undefined;
  }) => {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      const updates = {
        id: user?.id,
        username,
      };

      const { error } = await supabase.from("profile").upsert(updates, {
        returning: "minimal", // Don't return the value after inserting
      });

      if (error) {
        throw error;
      }
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Center width="100%">
      <VStack>
        <Box>
          <label htmlFor="email">Email</label>
          <Input id="email" type="text" value={session?.user?.email} disabled />
        </Box>

        <Box>
          <label htmlFor="username">Name</label>
          <Input
            id="username"
            type="text"
            value={username || ""}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Box>

        <Button onClick={() => updateProfile({ username })} disabled={loading}>
          {loading ? "Loading ..." : "Update"}
        </Button>

        <Button onClick={() => supabase.auth.signOut()}>Sign Out</Button>
      </VStack>
    </Center>
  );
};

export default Account;
