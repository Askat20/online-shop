import React from "react";
import { Button } from "@mui/material";

export const CustomButton = ({ children, onClick }) => (
    <Button
      variant="contained"
      color="primary"
      fullWidth
      sx={{ marginTop: 2 }}
      onClick={onClick}
    >
      {children}
    </Button>
  );

