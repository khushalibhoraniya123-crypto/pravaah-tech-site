import React, { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api';

interface AdminUser {
  email: string;
  name: string;
  role: string;
}

interface AuthContextType {
  token: string | null;
  user: AdminUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (token: string, user: AdminUser) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('pravaah_admin_token'));
  const [user, setUser] = useState<AdminUser | null>(() => {
    const saved = localStorage.getItem('pravaah_admin_user');
    return saved ? JSON.parse(saved) : null;
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkAuth = async () => {
      if (token) {
        const isValid = await api.verifyAdminSession(token);
        if (!isValid) {
          logout();
        }
      }
      setIsLoading(false);
    };

    checkAuth();
  }, [token]);

  const login = (newToken: string, newUser: AdminUser) => {
    setToken(newToken);
    setUser(newUser);
    localStorage.setItem('pravaah_admin_token', newToken);
    localStorage.setItem('pravaah_admin_user', JSON.stringify(newUser));
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('pravaah_admin_token');
    localStorage.removeItem('pravaah_admin_user');
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        isAuthenticated: !!token,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
