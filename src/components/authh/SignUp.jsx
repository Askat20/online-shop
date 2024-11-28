import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { CustomInput } from "../MUI/CustomInput";
import { CustomButton } from "../MUI/CustomButton";

export const SignUp = ({ navigateToSignin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Registered with:", { email, password });
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Sign Up
      </Typography>
      <CustomInput
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <CustomInput
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <CustomInput
        label="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <CustomButton text="Register" onClick={handleSignup} />
      <Typography variant="body2" sx={{ mt: 2 }}>
        Already have an account?{" "}
        <span
          style={{ color: "#1976d2", cursor: "pointer" }}
          onClick={navigateToSignin}
        >
          Sign In
        </span>
      </Typography>
    </Box>
  );
};
