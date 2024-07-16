"use client";
import CustomImage from "@/components/CustomImage";
import statics from "@/components/Statics";
import { Button, useTheme } from "@mui/material";
import React from "react";
import ShadowedTypography from "@/components/ShadowedTypography";

function ImageContent({
  title,
  text,
  link,
}: {
  title?: string;
  text?: string;
  link?: string;
}) {
  const theme = useTheme();
  return (
    <div className="h-full w-full flex flex-col justify-end relative top-[-100%]">
      <div className="flex pb-4 flex-col items-center justify-center w-full bg-gradient-to-t from-black to-transparent">
        <ShadowedTypography variant="h3" color={theme.palette.common.white}>
          {title}
        </ShadowedTypography>
        <ShadowedTypography
          variant="h6"
          className="mb-2"
          color={theme.palette.common.white}
        >
          {text}
        </ShadowedTypography>
        <Button size="small" >
          more information
        </Button>
      </div>
    </div>
  );
}

function UpcomingTitle({ title }: { title: string }) {
  const theme = useTheme();
  return (
    <div className="absolute flex py-2 items-center justify-center w-full bg-gradient-to-b from-black to-transparent">
      <ShadowedTypography variant="h3" color={theme.palette.common.white}>
        {title}
      </ShadowedTypography>
    </div>
  );
}

function UpcomingProducts() {
  return (
    <div className="w-full flex flex-row my-2 h-[75vw] lg:h-[50vw]">
      <UpcomingTitle title={"OUR UPCOMING PRODUCTS"} />
      <div className="w-1/2">
        <CustomImage
          className="w-full object-cover h-full"
          src={statics.firstPage?.upcoming?.watch}
          alt="watch"
        />
        <ImageContent text="available for pre-order" title="watch" />
      </div>
      <div className="w-1/2">
        <CustomImage
          className="w-full object-cover h-full"
          src={statics.firstPage?.upcoming?.instrument}
          alt="watch"
        />
        <ImageContent
          text="available for pre-order"
          title="miniature instrument"
        />
      </div>
    </div>
  );
}

export default UpcomingProducts;
