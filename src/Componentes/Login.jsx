import React, { useState } from 'react';

function Login() {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/logar/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Erro no login');
      }

      const data = await response.json();
      console.log(data.access); 
      localStorage.setItem("acess", data.access)
      alert('Login realizado com sucesso!');
      // Aqui você pode salvar token ou redirecionar
    } catch (error) {
      alert(`Erro: ${error.message}`);
    }
  };

  return (
    <div style={{ maxWidth: '300px', marginTop: '300px', marginLeft:'750px', padding: '20px', textAlign: 'center', border: '1px solid #ddd', borderRadius: '5px' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="username"
            placeholder="Nomizinho"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}>
          Entrar
        </button>
        <a href="/" style={{ padding:"20px" }}>Voltar</a>
      </form>
    </div>
  );
}

export default Login;
