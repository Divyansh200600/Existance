// src/components/LoginPage.js
import React, { useState } from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2.5em;
  color: #333;
  margin-bottom: 20px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 400px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  padding: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 10px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  font-size: 1em;
  
  &:focus {
    outline: none;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

const Button = styled.button`
  padding: 15px;
  border: none;
  border-radius: 10px;
  background-color: #3498db;
  color: #ffffff;
  font-size: 1.2em;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const SwitchButton = styled.button`
  background: none;
  border: none;
  color: #3498db;
  font-size: 1em;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #2980b9;
  }
`;

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <MainContainer>
      <Title>{isLogin ? 'Login' : 'Sign Up'}</Title>
      <FormContainer>
        {isLogin ? (
          <>
            <Input type="email" placeholder="Email" required />
            <Input type="password" placeholder="Password" required />
            <Button type="submit">Login</Button>
            <SwitchButton onClick={toggleForm}>
              Don't have an account? Sign Up
            </SwitchButton>
          </>
        ) : (
          <>
            <Input type="text" placeholder="Name" required />
            <Input type="email" placeholder="Email" required />
            <Input type="password" placeholder="Password" required />
            <Button type="submit">Sign Up</Button>
            <SwitchButton onClick={toggleForm}>
              Already have an account? Login
            </SwitchButton>
          </>
        )}
      </FormContainer>
    </MainContainer>
  );
};

export default LoginPage;
