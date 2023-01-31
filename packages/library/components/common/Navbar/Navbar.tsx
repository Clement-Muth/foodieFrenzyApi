import { Flex } from "rebass";
import { links } from "./constant";
import { Relative } from "..";
import { Text } from "../../ui";
import Link from "next/link";

const Navbar = () => {
  return (
    <Relative as="header" display="flex" height="64px" width="100%" px={[4, 4, 4, 6]}>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        sx={{ "& > a": { fontSize: 28, fontWeight: "900" } }}
      >
        <Link href="/" passHref>
          Nextjs13-Template
        </Link>
        <Flex as="nav">
          <Flex as="ul" px={0}>
            {links.map(({ label, ...link }) => (
              <Flex as="li" key={label} alignItems="center" fontSize={1} fontWeight={600}>
                <Link {...link} passHref>
                  <Text as="span" color="lightGrey" px={[2, 3]}>
                    {label}
                  </Text>
                </Link>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Relative>
  );
};

export default Navbar;
