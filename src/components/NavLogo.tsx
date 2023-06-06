import { Box } from "@chakra-ui/layout";
import Image from "next/image";

export default function NavLogo() {
  return (
    <Box width="120px" marginBottom="20px" paddingX="20px">
      <Image src="/assets/k-trax.svg" alt="logo" height="30" width="60" />
    </Box>
  );
}