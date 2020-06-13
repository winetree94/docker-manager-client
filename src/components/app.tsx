import React, { FunctionComponent, useState, ReactNode } from 'react';
import { Routes } from './routes/routes';
import { AuthContext } from '../context/auth_context';

export type IAppComponentProps = {
  children?: ReactNode;
};

export const App: FunctionComponent<IAppComponentProps> = (props) => {
  const [authenticated, setAuthenticated] = useState(false);
  const login = () => {
    console.log('login');
  };
  return (
    <AuthContext.Provider value={{ authenticated, login }}>
      <Routes />
    </AuthContext.Provider>
  );
};
