import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Header from "../components/Header";
import { Session } from "@supabase/supabase-js";
import Account from "../components/Account";
import Auth from "../components/Auth";
import { supabase } from "../utils/superbaseClient";
import { Flex } from "@chakra-ui/react";

const AccountPage: NextPage = () => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <>
      <Header />
      <Flex align="center">
        {!session ? <Auth /> : <Account session={session} />}
      </Flex>
    </>
  );
};

export default AccountPage;
