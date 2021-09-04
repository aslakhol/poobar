import { useRouter } from "next/router";
import Header from "../../components/Header";

const Equipment = () => {
  const router = useRouter();
  const { equipmentId } = router.query;

  return (
    <>
      <Header />
      <p>Equipment: {equipmentId}</p>
    </>
  );
};

export default Equipment;
