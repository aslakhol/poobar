import EntityList from "../EntityList/EntityList";

const BarList = () => {
  const bars = [
    { name: "Den Gode Nabo", id: 1 },
    { name: "Brix Brygghus", id: 2 },
    { name: "Lervig Local", id: 3 },
  ];

  return <EntityList entities={bars} type={"bar"} />;
};

export default BarList;
