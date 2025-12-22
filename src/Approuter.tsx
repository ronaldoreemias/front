import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./page/Loja";
import Cadastrar from "./page/cadastrar";
import Forum from "./page/forum";
import type { JSX } from "react";

// Componente de proteção
function ProtectedRoute({ children }: { children: JSX.Element }) {
  const token = localStorage.getItem("token"); 

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children;
}

function Approuter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Cadastrar" element={<Cadastrar />} />
        <Route
          path="/Forum"
          element={
            <ProtectedRoute>
              <Forum />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Approuter;
