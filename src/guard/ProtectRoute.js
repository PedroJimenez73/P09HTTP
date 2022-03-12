import React from 'react'
import { Navigate } from "react-router-dom";

export default function ProtectRoute({ user, children }) {
  if (!user) {
    return <Navigate to="/acceso-no-autorizado" replace />;
  }

  return children;
}