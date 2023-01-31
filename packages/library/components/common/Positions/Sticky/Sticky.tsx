import styled from "@emotion/styled";
import { Position } from "..";

import { PositionProps } from "styled-system";

export type StickyProps = PositionProps;

const Sticky = styled(Position)<StickyProps>({ position: "sticky" });

export default Sticky;
