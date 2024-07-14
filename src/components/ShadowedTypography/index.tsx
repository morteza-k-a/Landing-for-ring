'use client'
import { Typography, TypographyProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const ShadowedTypography = styled(Typography)<TypographyProps>(() => ({
  textShadow: "2px 2px 8px black",
}));

export default ShadowedTypography;
