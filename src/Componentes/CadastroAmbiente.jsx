import React, { useState } from "react";
import estilo from "./CadastroAmbiente.module.css"; // Certifique-se de que o nome do arquivo CSS esteja correto

const CadastroAmbiente = () => {
    const [formData, setFormData] = useState({
        nome: "",
        descricao: "",
        dataInicio: "",
        dataTermino: "",
        periodo: "",
        salaReservada: "",
        professorResponsavel: "",
        disciplinaAssociada: ""
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Dados cadastrados:", formData);
        alert("Ambiente cadastrado com sucesso!");
    };

    return (
        <div className={estilo.container}>
            <h2>Cadastro de Ambiente</h2>
            <form onSubmit={handleSubmit}>
                <div className={estilo.inputGroup}>
                    <label htmlFor="nome">Nome do Ambiente:</label>
                    <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required />
                </div>
                
                <div className={estilo.inputGroup}>
                    <label htmlFor="dataInicio">Data Início:</label>
                    <input type="date" id="dataInicio" name="dataInicio" value={formData.dataInicio} onChange={handleChange} required />
                </div>

                <div className={estilo.inputGroup}>
                    <label htmlFor="dataTermino">Data Término:</label>
                    <input type="date" id="dataTermino" name="dataTermino" value={formData.dataTermino} onChange={handleChange} required />
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
                    <label htmlFor="salaReservada">Sala Reservada:</label>
                    <input type="text" id="salaReservada" name="salaReservada" value={formData.salaReservada} onChange={handleChange} required />
                </div>

                <div className={estilo.inputGroup}>
                    <label htmlFor="professorResponsavel">Professor Responsável:</label>
                    <input type="text" id="professorResponsavel" name="professorResponsavel" value={formData.professorResponsavel} onChange={handleChange} required />
                </div>

                <div className={estilo.inputGroup}>
                    <label htmlFor="disciplinaAssociada">Disciplina Associada:</label>
                    <input type="text" id="disciplinaAssociada" name="disciplinaAssociada" value={formData.disciplinaAssociada} onChange={handleChange} required />
                </div>

                <button type="submit" className={estilo.btn}>Cadastrar</button>

                <a href="/">Voltar</a>
            </form>
        </div>
    );
};

export default CadastroAmbiente;
