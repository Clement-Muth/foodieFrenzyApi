import { FC, forwardRef, ReactNode } from "react";
import { Text as TextRebass, TextProps as TextRebassProps } from "rebass";
import { shortProps } from "./constant";

export interface TextProps extends TextRebassProps {
  text?: string;
  children?: ReactNode;
}

const Text: FC<TextProps> = forwardRef(({ text, ...props }, ref) => {
  props.as = props.as || "p";

  return (
    <TextRebass {...props} ref={ref} {...shortProps(props)} sx={{ ...props.sx }}>
      {props.children}
    </TextRebass>
  );
});

Text.displayName = "Text";

export default Text;
