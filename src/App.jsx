import React from 'react';
import { SignIn } from './components/auth/SignIn';
import { SignUp } from './components/auth/SignUp';


const App = () => {
  return (
    <div>
      <SignIn/>
      <SignUp/>
    </div>
  );
};

export default App;

