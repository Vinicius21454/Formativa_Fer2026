import React, { useState } from 'react';
import estilo from './CadastroProfessores.module.css'; // Importando o CSS corretamente

function CadastroProfessor() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    disciplina: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/professores", { // Chama a API do backend
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Erro ao cadastrar professor");
      }

      alert("Professor cadastrado com sucesso!");
      setFormData({ nome: "", email: "", disciplina: "" });
    } catch (error) {
      alert(`Erro: ${error.message}`);
    }
  };

  return (
    <div className={estilo.container}>
      <h2>Cadastro de Professor</h2>
      <form onSubmit={handleSubmit}>
        <div className={estilo.inputGroup}>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required />
        </div>
        <div className={estilo.inputGroup}>
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className={estilo.inputGroup}>
          <label htmlFor="disciplina">Disciplina:</label>
          <input type="text" id="disciplina" name="disciplina" value={formData.disciplina} onChange={handleChange} required />
        </div>
        <button type="submit" className={estilo.btn}>Cadastrar</button>
        <a href="/" style={{ padding: "20px" }}>Voltar</a>
      </form>
    </div>
  );
}

export default CadastroProfessor;
