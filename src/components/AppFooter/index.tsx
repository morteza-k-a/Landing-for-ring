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
        <IconButton>
          <XIcon className="text-white" />
        </IconButton>
        <IconButton>
          <InstagramIcon className="text-white" />
        </IconButton>
        <IconButton>
          <TelegramIcon className="text-white" />
        </IconButton>
      </div>
    </div>
  );
}

export default AppFooter;
