import React from "react";
import Routering from "./routes";
import UserService from "../Services/UserService";

const ProtectedRoutes = ({ children }) => {
  const userService = new UserService();
  const usuarioAutenticado = userService.usuarioAutenticado();
  console.log("usuarioAutenticado", usuarioAutenticado);
  return usuarioAutenticado ? children : <Routering />;
};

export default ProtectedRoutes;