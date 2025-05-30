import React, { useState } from 'react';
import estilo from './CadastroGestor.module.css'; // Importando o CSS

function CadastroGestor() {
  const [formData, setFormData] = useState({
    NI:'',
    Nome: '',
    username: "",
    password: "",
    Telefone:'',
    DataNascimento:'',
    DataContratacao:'',
    email: '',
    autorizacoes: 'G'
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
      const token = localStorage.getItem('acess'); // Certifique-se de que 'acess' está correto!
      console.log('Bearer ' + token);

      const response = await fetch("http://localhost:8000/professores/", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` // Correção no formato da string
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Erro ao cadastrar gestor");
      }

      alert("Gestor cadastrado com sucesso!");
      setFormData({ NI: "", Nome: "", Telefone: "",  DataNascimento: "",  DataContratacao: "",  email: "",}); // Limpar o formulário após o envio
    } catch (error) {
      alert(`Erro: ${error.message}`);
    }
  };

  return (
    <div className={estilo.container}>
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <div className={estilo.inputGroup}>
          <label htmlFor="NI">NI:</label>
          <input type="text" id="NI" name="NI" value={formData.NI} onChange={handleChange} required />
        </div>

        <div className={estilo.inputGroup}>
          <label htmlFor="username">Nome:</label>
          <input type="Nome" id="Nome" name="Nome" value={formData.Nome} onChange={handleChange} required />
        </div>
        <div className={estilo.inputGroup}>
          <label htmlFor="username">username:</label>
          <input type="username" id="username" name="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div className={estilo.inputGroup}>
          <label htmlFor="password">password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>

        <div className={estilo.inputGroup}>
          <label htmlFor="Telefone">Telefone:</label>
          <input type="Telefone" id="Telefone" name="Telefone" value={formData.Telefone} onChange={handleChange} required />
        </div>

        <div className={estilo.inputGroup}>
          <label htmlFor="DataNascimento">DataNascimento:</label>
          <input type="Date" id="DataNascimento" name="DataNascimento" value={formData.DataNascimento} onChange={handleChange} required />
        </div>

        <div className={estilo.inputGroup}>
          <label htmlFor=" DataContratacao">DataContratacao:</label>
          <input type="date" id="DataContratacao" name="DataContratacao" value={formData.DataContratacao} onChange={handleChange} required />
        </div>

        <div className={estilo.inputGroup}>
          <label htmlFor=" email">email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className={estilo.inputGroup}>
          <label htmlFor=" cargo">cargo:</label>
          <input type="cargo" id="cargo" name="cargo" value={formData.cargo} onChange={handleChange} required />
        </div>

        
        <button type="submit" className={estilo.btn}>Cadastrar</button>
        <a href="/" style={{ padding: "20px" }}>Voltar</a>
      </form>
    </div>
  );
}

export default CadastroGestor;
