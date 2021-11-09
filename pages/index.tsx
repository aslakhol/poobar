import React, { useEffect } from "react";
import type { NextPage } from "next";
import Header from "../components/Header";
import { useRouter } from "next/router";
import { Spinner } from "@chakra-ui/spinner";

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/bar/1");
  }, [router]);

  return (
    <>
      <Header />
      <Spinner />
    </>
  );
};

export default Home;
