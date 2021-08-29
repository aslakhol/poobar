import { useRouter } from "next/router";
import Header from "../../components/Header";

const Bar = () => {
  const router = useRouter();
  const { barId } = router.query;

  return (
    <>
      <Header />
      <p>Bar: {barId}</p>
    </>
  );
};

export default Bar;
