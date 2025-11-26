// src/context/AuthContext.js
import { createContext, useEffect, useState } from "react";
import api from "../services/api";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      api
        .get("/perfil")
        .then((res) => setUsuario(res.data.usuario))
        .catch(() => sair());
    }
  }, []);

  function login(token) {
    localStorage.setItem("token", token);
    api.defaults.headers.Authorization = `Bearer ${token}`;

    api
      .get("/perfil")
      .then((res) => {
        setUsuario(res.data.usuario);
        window.location = "/produtos";
      })
      .catch(() => sair());
  }

  function sair() {
    localStorage.removeItem("token");
    setUsuario(null);
    window.location = "/";
  }

  return (
    <AuthContext.Provider value={{ usuario, login, sair }}>
      {children}
    </AuthContext.Provider>
  );
}
