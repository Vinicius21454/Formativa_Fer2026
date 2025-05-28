import React, { useState } from 'react';
import estilo from './CadastroGestor.module.css'; // Importando o CSS

function CadastroGestor() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cargo: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Gestor cadastrado:\nNome: ${formData.nome}\nEmail: ${formData.email}\nCargo: ${formData.cargo}`);
  };

  return (
    <div className={estilo.container}>
      <h2>Cadastro de Disciplina</h2>
      <form onSubmit={handleSubmit}>
        <div className={estilo.inputGroup}>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required />
        </div>
        <div className={estilo.inputGroup}>
          <label htmlFor="email">Curso:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className={estilo.inputGroup}>
          <label htmlFor="cargo">Carga Horária:</label>
          <input type="text" id="Professor Responsável" name="Professor Responsável" value={formData.ProfessorResponsável} onChange={handleChange} required />
        </div>
        <div className={estilo.inputGroup}>
          <label htmlFor="cargo">Descrição:</label>
          <input type="text" id="Professor Responsável" name="Professor Responsável" value={formData.ProfessorResponsável} onChange={handleChange} required />
        </div>
        <div className={estilo.inputGroup}>
          <label htmlFor="cargo">Professor Responsável:</label>
          <input type="text" id="Professor Responsável" name="Professor Responsável" value={formData.ProfessorResponsável} onChange={handleChange} required />
        </div>
        <button type="submit" className={estilo.btn}>Cadastrar</button>

        <a href="/">Voltar</a>
      </form>
    </div>
  );
}

export default CadastroGestor;
