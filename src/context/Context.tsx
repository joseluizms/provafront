import React, { createContext, useState, useMemo } from 'react';

// Definindo a interface do contexto de autenticação
interface IAuthContext {
  isAuthenticated: boolean;
  signIn: () => void;
}

// Criando o contexto com um valor inicial padrão
export const AuthContext = createContext<IAuthContext>({
  isAuthenticated: false,
  signIn: () => {},
});

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const contextValue = useMemo(() => ({
    isAuthenticated,
    signIn: () => setIsAuthenticated(true),
  }), [isAuthenticated]);

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};
