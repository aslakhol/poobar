import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import { supabase } from "../utils/superbaseClient";
import Auth from "../components/Auth";
import Account from "../components/Account";
import { Session } from "@supabase/supabase-js";

const Home: NextPage = () => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
      {!session ? <Auth /> : <Account session={session} />}
    </div>
  );
};

export default Home;
