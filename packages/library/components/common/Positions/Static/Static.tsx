import styled from "@emotion/styled";
import { Position } from "..";

import { PositionProps } from "styled-system";

export type StaticProps = PositionProps;

const Static = styled(Position)<StaticProps>({ position: "static" });

export default Static;
