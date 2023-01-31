import { TextProps } from "./Text";

export const shortProps = (props: TextProps): TextProps => {
  return {
    fontSize:
      props.fontSize || (props.as == "h2" || props.as == "h1" ? [5, 6, 7] : props.as == "h3" ? [4, 5, 6] : [1, 2])
  };
};
