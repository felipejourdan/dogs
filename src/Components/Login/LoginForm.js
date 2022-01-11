import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
      });
  }

  return (
    <section>
      <h1>Login </h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          placeholder="Usuário"
          onChange={({ target }) => setUsername(target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Senha"
          onChange={({ target }) => setPassword(target.value)}
        />
        <button>Entrar</button>
      </form>
      <Link to="/login/create">Criar</Link>
      <Link to="/login/lost">Recuperar Password</Link>
      <Link to="/login/reset">Resetar Password</Link>
    </section>
  );
};

export default LoginForm;
