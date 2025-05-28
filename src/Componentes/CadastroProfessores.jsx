import React, { useState } from 'react';
import estilo from './CadastroProfessores.module.css'; // Importando o CSS corretamente

function CadastroProfessor() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    disciplina: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Professor cadastrado:\nNome: ${formData.nome}\nEmail: ${formData.email}\nDisciplina: ${formData.disciplina}`);
  };

  return (
    <div className={estilo.container}>
      <h2>Cadastro de Professor</h2>
      <form onSubmit={handleSubmit}>
        <div className={estilo.inputGroup}>
          <label htmlFor="nome">Nome :</label>
          <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required />
        </div>
        <div className={estilo.inputGroup}>
          <label htmlFor="email">E-mail :</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className={estilo.inputGroup}>
          <label htmlFor="disciplina">Professor:</label>
          <input type="text" id="disciplina" name="disciplina" value={formData.disciplina} onChange={handleChange} required />
        </div>
        <button type="submit" className={estilo.btn}>Cadastrar</button>
        <a href="/">Voltar</a>
      </form>
    </div>
  );
}

export default CadastroProfessor;
