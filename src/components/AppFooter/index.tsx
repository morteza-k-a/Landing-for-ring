import { IconButton, Typography } from "@mui/material";
import React from "react";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";

function AppFooter() {
  return (
    <div className="w-full p-4 flex justify-center items-center flex-col bg-neutral-900">
      <Typography color={"white"} variant="h6">
        follow us on social media
      </Typography>
      <div>
        <IconButton aria-label="X">
          <XIcon className="text-white" />
        </IconButton>
        <IconButton aria-label="instagram">
          <InstagramIcon className="text-white" />
        </IconButton>
        <IconButton aria-label="telegram"> 
          <TelegramIcon className="text-white" />
        </IconButton>
      </div>
    </div>
  );
}

export default AppFooter;
