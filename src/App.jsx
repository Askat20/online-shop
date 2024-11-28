import React, { useState } from "react";
import {SignIn} from "./components/authh/SignIn"
import { SignUp }from "./components/authh/SignUp"
export const App = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleNavigateToSignup = () => setIsSignIn(false);
  const handleNavigateToSignin = () => setIsSignIn(true);

  return (
    <div>
      {isSignIn ? (
        <SignIn navigateToSignup={handleNavigateToSignup} />
      ) : (
        <SignUp navigateToSignin={handleNavigateToSignin} />
      )}
    </div>
  );
};


