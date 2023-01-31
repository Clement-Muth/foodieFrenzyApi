import styled from "@emotion/styled";
import { Position } from "..";
import { PositionProps } from "styled-system";

export type AbsoluteProps = PositionProps;

const Absolute = styled(Position)<AbsoluteProps>({ position: "absolute" });

export default Absolute;
