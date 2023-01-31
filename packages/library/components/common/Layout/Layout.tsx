import { Box } from "rebass";
import type { FC } from "react";
import { NextPages } from "../../../interfaces/pages";
import { Navbar } from "..";

const Layout: FC<NextPages> = ({ ...props }) => {
  return (
    <>
      <Navbar />
      <Box as="main" className="fit">
        {props.children}
      </Box>
    </>
  );
};

export default Layout;
