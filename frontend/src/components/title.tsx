import React from "react";
import BedroomBabyIcon from "@mui/icons-material/BedroomBaby";
import { Box, Typography } from "@mui/material";
function title({ collapsed }: any) {
  return (
    <Box display={"flex"}>
      <BedroomBabyIcon
        sx={{
          marginRight: collapsed ? 0 : 2,
        }}
      />
      <Typography
        fontSize={14}
        fontWeight={700}
        display={collapsed ? "none" : "block"}
      >
        Dashboard Mern
      </Typography>
    </Box>
  );
}

export default title;
