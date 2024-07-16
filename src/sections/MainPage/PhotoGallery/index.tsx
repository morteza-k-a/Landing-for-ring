import { Typography } from "@mui/material";
import React from "react";
import statics from "@/components/Statics";
import SmoothImage from "@/components/SmoothImage";

function PcGallery() {
  return (
    <>
      <div className="flex p-2 w-full h-[40vh] lg:h-[60vh] xl:h-[80vh] lg:p-4 flex-row justify-center items-center">
        <SmoothImage
          className="object-cover h-full w-5/12"
          src={statics.firstPage?.gallery?.image1}
          alt={"image1"}
        />
        <div className="w-7/12 h-full">
          <div className="w-full h-1/2 flex flex-row pl-4 pb-4 lg:pl-8 lg:pb-8">
            <div className="h-full w-1/2 pr-2 lg:pr-4">
              <SmoothImage
                className="object-cover h-full w-full"
                src={statics.firstPage?.gallery?.image2}
                alt={"image2"}
              />
            </div>
            <div className="h-full w-1/2 pl-2 lg:pl-2">
              <SmoothImage
                className="object-cover h-full w-full "
                src={statics.firstPage?.gallery?.image3}
                alt={"image3"}
              />
            </div>
          </div>
          <div className="w-full h-1/2 pl-4 lg:pl-8">
            <SmoothImage
              className="object-cover h-full w-full"
              src={statics.firstPage?.gallery?.image4}
              alt={"image4"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

function PhotoGallery() {
  return (
    <div className="flex items-center p-4 flex-col">
      <Typography variant="h5"> GALLERY </Typography>
      <PcGallery />
    </div>
  );
}

export default PhotoGallery;
