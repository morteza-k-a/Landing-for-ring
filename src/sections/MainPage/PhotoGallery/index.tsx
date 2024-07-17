import { Typography } from "@mui/material";
import React from "react";
import statics from "@/components/Statics";
import SmoothImage from "@/components/SmoothImage";
import Img1 from "../../../../public/static/firstPage/gallery1.jpg";
import Img2 from "../../../../public/static/firstPage/gallery2.jpg";
import Img3 from "../../../../public/static/firstPage/gallery3.jpg";
import Img4 from "../../../../public/static/firstPage/gallery4.jpg";
import Image from "next/image";

function PcGallery() {
  return (
    <>
      <div className="flex px-2 py-4 w-full h-[40vh] lg:h-[60vh] xl:h-[80vh] lg:p-4 flex-row justify-center items-center">
        {/* <SmoothImage
          className="object-cover h-full w-5/12"
          src={statics.firstPage?.gallery?.image1}
          alt={"image1"}
        /> */}

        <Image
          src={Img1}
          alt="img1"
          className="object-cover h-full  w-5/12 shadow-lg rounded-lg"
          placeholder="blur"
        />

        <div className="w-7/12 h-full">
          <div className="w-full h-1/2 flex flex-row pl-4 pb-4 lg:pl-8 lg:pb-8">
            <div className="h-full w-1/2 pr-2 lg:pr-4">
              <Image
                placeholder="blur"
                className="object-cover h-full w-full shadow-lg rounded-lg"
                src={Img2}
                alt={"image2"}
              />
            </div>
            <div className="h-full w-1/2 pl-2 lg:pl-2">
              <Image
                placeholder="blur"
                className="object-cover h-full w-full shadow-lg rounded-lg"
                src={Img3}
                alt={"image3"}
              />
            </div>
          </div>
          <div className="w-full h-1/2 pl-4 lg:pl-8">
            <Image
              placeholder="blur"
              className="object-cover h-full w-full shadow-lg rounded-lg"
              src={Img4}
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
    <div className="flex items-center px-4 py-8 flex-col">
      <Typography variant="h5"> GALLERY </Typography>
      <PcGallery />
    </div>
  );
}

export default PhotoGallery;
