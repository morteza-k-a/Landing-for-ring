import React from "react";

function CustomImage(props: React.ComponentProps<"img">) {
  return <img {...props} loading="lazy" />;
}

export default CustomImage;
