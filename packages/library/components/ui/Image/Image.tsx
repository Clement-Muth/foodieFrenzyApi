import ImageNext, { type ImageProps } from "next/legacy/image";
import { PositionProps } from "styled-system";

import { FC, useEffect, useRef } from "react";
import { Relative } from "../../common";
import { FlexProps } from "rebass";

const Image: FC<
  Omit<ImageProps, "height" | "width"> &
    PositionProps &
    FlexProps & { height?: string | number | number[]; width?: string | number | number[] }
> = ({ height = "100%", width = "100%", sx, src, ...props }) => {
  const altSubstring: string = src.substring(src.lastIndexOf("/") + 1);
  const alt: string = altSubstring.substring(0, altSubstring.lastIndexOf(".")).replace(/-/g, " ");
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imageRef.current) return;
    imageRef.current?.children[0].children[0].setAttribute(
      "width",
      width.toString().includes("px") || width.toString().includes("%") ? width.toString() : width + "px"
    );
    imageRef.current?.children[0].children[0].setAttribute(
      "height",
      height.toString().includes("px") || height.toString().includes("%") ? height.toString() : height + "px"
    );
  }, [imageRef, width, height]);

  return (
    <Relative ref={imageRef} height={height} width={width} sx={sx} overflow="hidden" {...props}>
      <ImageNext alt={alt} src={src} layout="fill" objectFit="cover" {...props} />
    </Relative>
  );
};
Image.displayName = "Image";

export default Image;
