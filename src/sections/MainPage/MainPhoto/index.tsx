import ShadowedTypography from "@/components/ShadowedTypography";
import { Button } from "@mui/material";
import React from "react";
import statics from "@/components/Statics";

function MainPhoto() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-slate-300">
      <div className="absolute flex justify-center items-center flex-col max-w-[95vw]">
        <ShadowedTypography variant="h3" color={"white"}>
          the premium ring, made only for the best
        </ShadowedTypography>
        <Button size="large" variant="contained" className="mt-4">
          learn more
        </Button>
      </div>
      <img
        alt="mainIMG"
        className="object-cover max-h-screen w-full h-full"
        src={statics.firstPage?.mainImage}
      />
    </div>
  );
}

export default MainPhoto;
