import styled from "@emotion/styled";
import { Position } from "..";

import { PositionProps } from "styled-system";

export type RelativeProps = PositionProps;

const Relative = styled(Position)<RelativeProps>({ position: "relative" });

export default Relative;
