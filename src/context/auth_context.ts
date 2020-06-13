import React from 'react';

export type IAuthContext = {
  authenticated: boolean;
  login(): void;
};

export type IAuthState = IAuthContext;

export const AuthContext = React.createContext<IAuthContext>({
  authenticated: false,
  login() {
    console.log('a');
  },
});
