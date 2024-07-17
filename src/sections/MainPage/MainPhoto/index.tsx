import ShadowedTypography from "@/components/ShadowedTypography";
import { Button } from "@mui/material";
import React from "react";
import statics from "@/components/Statics";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Image from "next/image";
import MainImg from "../../../../public/static/firstPage/main.jpg";

function Content() {
  return (
    <div className="flex flex-col justify-center items-center">
      <ShadowedTypography variant="h3" color={"white"}>
        the premium ring, made only for the best
      </ShadowedTypography>
      <ShadowedTypography className="mt-4" color={"white"} variant="h6">
        limited sale, buy now
      </ShadowedTypography>
      <Button size="large" variant="contained" className="mt-4">
        learn more
      </Button>
    </div>
  );
}

function MainPhoto() {
  return (
    <div className="h-svh flex flex-col items-center justify-center bg-slate-300">
      <div className="absolute h-full flex justify-between items-center flex-col max-w-[95vw]">
        <div></div>
        <Content />
        <div className="pb-4 animate-bounce">
          <ShadowedTypography color={"white"}>
            <KeyboardArrowDownIcon fontSize="large" />
          </ShadowedTypography>
        </div>
      </div>
      <Image
        placeholder="blur"
        alt="mainIMG"
        className="object-cover max-h-screen w-full h-full"
        src={MainImg}
      />
    </div>
  );
}

export default MainPhoto;
