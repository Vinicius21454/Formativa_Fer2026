import React, { useState } from 'react';
import estilo from './CadastroDisciplina.module.css'; // Importando o CSS

function CadastroDisciplina() {
  const [formData, setFormData] = useState({
    nome: '',
    cargaHoraria: '',
    descricao: '',
    professorResponsavel: ''
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch('http://localhost:8000/disciplinas/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Erro ao cadastrar disciplina');
      }

      const data = await response.json();
      alert('Disciplina cadastrada com sucesso!');
      console.log("Dados cadastrados:", data);
      // Limpar o formulário após o sucesso
      setFormData({
        nome: '',
        cargaHoraria: '',
        descricao: '',
        professorResponsavel: ''
      });
    } catch (error) {
      alert(`Erro: ${error.message}`);
    }
  };

  return (
    <div className={estilo.container}>
      <h2>Cadastro de Disciplina</h2>
      <form onSubmit={handleSubmit}>
        <div className={estilo.inputGroup}>
          <label htmlFor="nome">Nome da Disciplina:</label>
          <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required />
        </div>
        <div className={estilo.inputGroup}>
          <label htmlFor="cargaHoraria">Carga Horária:</label>
          <input type="text" id="cargaHoraria" name="cargaHoraria" value={formData.cargaHoraria} onChange={handleChange} required />
        </div>
        <div className={estilo.inputGroup}>
          <label htmlFor="descricao">Descrição:</label>
          <input type="text" id="descricao" name="descricao" value={formData.descricao} onChange={handleChange} required />
        </div>
        <div className={estilo.inputGroup}>
          <label htmlFor="professorResponsavel">Professor Responsável:</label>
          <input type="text" id="professorResponsavel" name="professorResponsavel" value={formData.professorResponsavel} onChange={handleChange} required />
        </div>
        <button type="submit" className={estilo.btn}>Cadastrar</button>
        <a href="/" style={{ padding: "20px" }}>Voltar</a>
      </form>
    </div>
  );
}

export default CadastroDisciplina;
