import React from "react";
import { BarType } from "../../types/types";
import BarNav from "./BarNav";
import DrinkList from "./DrinkList";

type Props = {
  bar: BarType;
};

const Bar = (props: Props) => {
  const { bar } = props;

  return (
    <>
      <BarNav barId={bar.id} />
      <DrinkList drinks={bar.drink} type={"drink"} />
    </>
  );
};

export default Bar;
