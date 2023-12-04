import { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const values = {
        email: email,
        password: password,
      };

      const response = await fetch('http://localhost:3001/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div>
        <label className="form-label">E-mail</label>
        <div className="mt-1">
          <input
            type="text"
            className="form-input-title"
            placeholder="Entrez votre adresse e-mail"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
      </div>
      <div>
        <label className="form-label">Mot de passe</label>
        <div className="mt-1">
          <input
            type="password"
            className="form-input-title"
            placeholder="Entrez votre mot de passe"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="btn-primary relative flex w-full justify-center"
        >
          Se connecter
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
