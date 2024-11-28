import React from "react";
import { TextField } from "@mui/material";

export const CustomInput = ({ label, type, value, onChange, ...props }) => {
  return (
    <TextField
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      variant="outlined"
      fullWidth
      margin="normal"
      {...props}
    />
  );
};


