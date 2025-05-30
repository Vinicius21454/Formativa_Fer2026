import React, { useState } from "react";
import estilo from "./CadastroAmbiente.module.css";

function CadastroAmbiente() {
  const [formData, setFormData] = useState({
    nomeAmbiente: "",
    dataInicio: "",
    dataTermino: "",
    periodo: "",
    professor: "",
    disciplina: "",
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
      const token = localStorage.getItem('acess'); // Recupera o token de autenticação do usuário

      const response = await fetch("http://localhost:8000/reservas/", { // Adicionando a barra no final da URL
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, // Enviando o token no cabeçalho da requisição
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Erro ao cadastrar reserva");
      }

      alert("Reserva cadastrada com sucesso!");
      setFormData({
        nomeAmbiente: "",
        DataInicio: "",
        DataTermino: "",
        Periodo: "",
        ProfessorResponsavel: "",
        DisciplinaAssociada: "",
      });
    } catch (error) {
      alert(`Erro: ${error.message}`);
    }
  };

  return (
    <div className={estilo.container}>
      <h2>Cadastro de Ambiente</h2>
      <form onSubmit={handleSubmit}>
        
        <div className={estilo.inputGroup}>
          <label>nomeAmbiente:</label>
          <input type="text" name="nomeAmbiente" value={formData.nomeAmbiente} onChange={handleChange} required />
        </div>

        <div className={estilo.inputGroup}>
          <label>DataInicio:</label>
          <input type="date" name="dataInicio" value={formData.dataInicio} onChange={handleChange} required />
        </div>

        <div className={estilo.inputGroup}>
          <label>DataTermino:</label>
          <input type="date" name="dataTermino" value={formData.dataTermino} onChange={handleChange} required />
        </div>

            <div className={estilo.inputGroup}>
                        <label htmlFor="periodo">Período:</label>
                        <select id="periodo" name="periodo" value={formData.periodo} onChange={handleChange} required>
                            <option value="" disabled>Selecione</option>
                            <option value="manha">Manhã</option>
                            <option value="tarde">Tarde</option>
                            <option value="noite">Noite</option>
                        </select>
                    </div>

        <div className={estilo.inputGroup}>
          <label>ProfessorResponsável:</label>
          <input type="text" name="professor" value={formData.professor} onChange={handleChange} required />
        </div>

        <div className={estilo.inputGroup}>
          <label>DisciplinaAssociada:</label>
          <input type="text" name="disciplina" value={formData.disciplina} onChange={handleChange} required />
        </div>

        <button type="submit" className={estilo.btn}>Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastroAmbiente;
