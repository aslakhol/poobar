import React from "react";
import type { NextPage } from "next";
import Header from "../components/Header";
import Account from "../components/Account/Account";
import Auth from "../components/Auth";
import { useAuthContext } from "../context/AuthContext";

const AccountPage: NextPage = () => {
  const { session } = useAuthContext();

  return (
    <>
      <Header />
      {!session ? <Auth /> : <Account />}
    </>
  );
};

export default AccountPage;
