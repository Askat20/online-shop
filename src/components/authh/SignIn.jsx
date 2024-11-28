import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { CustomButton } from "../MUI/CustomButton";
import { CustomInput } from "../MUI/CustomInput";



export const SignIn = ({ navigateToSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Logged in with:", { email, password });
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Sign In
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
      <CustomButton text="Login" onClick={handleLogin} />
      <Typography variant="body2" sx={{ mt: 2 }}>
        Don't have an account?{" "}
        <span
          style={{ color: "#1976d2", cursor: "pointer" }}
          onClick={navigateToSignup}
        >
          Sign Up
        </span>
      </Typography>
    </Box>
  );
};


