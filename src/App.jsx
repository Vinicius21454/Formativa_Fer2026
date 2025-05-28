import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./Componentes/pages/Inicio";
import Login from './Componentes/Login'
import CadastroProfessores from './Componentes/CadastroProfessores'
import CadastroGestor from "./Componentes/CadastroGestor";
import CadastroDisciplina from './Componentes/CadastroDisciplina'
import CadastroAmbiente from "./Componentes/CadastroAmbiente";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/CadastroProfessores" element={<CadastroProfessores />} />
        <Route path="/CadastroGestor" element={<CadastroGestor />} />
        <Route path="/CadastroDisciplina" element={<CadastroDisciplina />} />
        <Route path="/CadastroAmbiente" element={<CadastroAmbiente />} />

      </Routes>
    </Router>
  );
}

export default App;