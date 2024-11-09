import React, { useState } from 'react';
import Login from '../components/login';
import Signup from '../components/signup';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <button onClick={() => setIsLogin(true)}>Login</button>
      <button onClick={() => setIsLogin(false)}>Sign Up</button>
      {isLogin ? <Login /> : <Signup />}
    </div>
  );
};

export default LoginPage;
