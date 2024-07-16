import React from "react";
import CustomImage from "../CustomImage";

function SmoothImage(props: React.ComponentProps<"img">) {
  return (
    <CustomImage
      className={`shadow-lg rounded-lg ${props.className}`}
      src={props.src}
      alt={props.alt}
    />
  );
}

export default SmoothImage;
