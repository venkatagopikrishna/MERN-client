
import React from 'react';
import Register from './Register';
import Login from './Login';
import { MyContextProvider } from './Mycontext';

const Day3 = () => {
  return (
    <MyContextProvider>
      <div>
        <Register />
        <Login />
      </div>
    </MyContextProvider>
  );
};

export default Day3;