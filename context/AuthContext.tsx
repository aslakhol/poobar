import { Session, User } from "@supabase/supabase-js";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuthStateChange, useClient } from "react-supabase";

const initialState = {
  session: null as Session | null,
  user: null as User | null,
};
export const AuthContext = createContext(initialState);

type Props = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: Props) {
  const client = useClient();
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const session = client.auth.session();
    setState({ session, user: session?.user ?? null });
  }, []);

  useAuthStateChange((event, session) => {
    console.log(`Supbase auth event: ${event}`, session);
    setState({ session, user: session?.user ?? null });
  });

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw Error("useAuth must be used within AuthProvider");
  return context;
}
