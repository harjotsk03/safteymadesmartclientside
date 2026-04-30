"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import Cookies from "js-cookie";

const API_BASE = "http://localhost:8088/api/v1";

const COOKIE_OPTIONS: Cookies.CookieAttributes = {
  secure: process.env.NODE_ENV === "production",
  sameSite: "Lax",
};

interface User {
  id: string;
  email: string;
  full_name: string;
}

interface AuthContextValue {
  user: User | null;
  isLoading: boolean;
  register: (fullName: string, email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = Cookies.get("user");
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        Cookies.remove("user");
      }
    }
    setIsLoading(false);
  }, []);

  const saveSession = useCallback((userData: User, accessToken: string, refreshToken: string) => {
    Cookies.set("accessToken", accessToken, { ...COOKIE_OPTIONS, expires: 1 });
    Cookies.set("refreshToken", refreshToken, { ...COOKIE_OPTIONS, expires: 7 });
    Cookies.set("user", JSON.stringify(userData), { ...COOKIE_OPTIONS, expires: 7 });
    setUser(userData);
  }, []);

  const register = useCallback(async (fullName: string, email: string, password: string) => {
    const res = await fetch(`${API_BASE}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ full_name: fullName, email, password }),
    });

    const data = await res.json();

    console.log(data);

    if (!res.ok) throw new Error(data.error || "Registration failed");

    saveSession(data.user, data.accessToken, data.refreshToken);
  }, [saveSession]);

  const login = useCallback(async (email: string, password: string) => {
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Login failed");

    saveSession(data.user, data.accessToken, data.refreshToken);
  }, [saveSession]);

  const logout = useCallback(() => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    Cookies.remove("user");
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
}
