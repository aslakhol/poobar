import { AddIcon } from "@chakra-ui/icons";
import { Link, IconButton } from "@chakra-ui/react";
import { useRouter } from "next/router";

const NewLinkButton = () => {
  const router = useRouter();

  return (
    <Link href={`${router.asPath}/new`}>
      <IconButton aria-label={`new ${router.asPath}`} padding="0">
        <AddIcon />
      </IconButton>
    </Link>
  );
};

export default NewLinkButton;
