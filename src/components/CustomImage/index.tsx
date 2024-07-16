import React from "react";

function CustomImage(props: React.ComponentProps<"img">) {
  return <img loading="lazy" {...props}  />;
}

export default CustomImage;
