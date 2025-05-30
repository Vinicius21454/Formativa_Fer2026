import React, { useState } from 'react';
import estilo from './CadastroDisciplina.module.css'; // Importando o CSS

function CadastroDisciplina() {
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// Conectar ao MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("Banco de dados conectado"))
.catch(err => console.error("Erro ao conectar ao MongoDB:", err));

// Modelo de Disciplina
const DisciplinaSchema = new mongoose.Schema({
  nome: String,
  cargaHoraria: Number,
  descricao: String,
  professorResponsavel: String,
});

const Disciplina = mongoose.model("Disciplina", DisciplinaSchema);

// Rota para cadastrar uma disciplina
app.post("/disciplinas", async (req, res) => {
  try {
    const novaDisciplina = new Disciplina(req.body);
    await novaDisciplina.save();
    res.status(201).json(novaDisciplina);
  } catch (error) {
    res.status(500).json({ message: "Erro ao cadastrar disciplina", error: error.message });
  }
});

// Rota para obter todas as disciplinas
app.get("/disciplinas", async (req, res) => {
  try {
    const disciplinas = await Disciplina.find();
    res.json(disciplinas);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar disciplinas", error: error.message });
  }
});

// Inicializar servidor
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

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
