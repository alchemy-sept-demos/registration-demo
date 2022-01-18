import React from 'react';

export default function AuthForm({
  type,
  errorMessage,
  email,
  setEmail,
  password,
  setPassword,
  username,
  setUsername,
  handleSubmit,
}) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <p>{errorMessage}</p>
      {type === 'signup' && (
        <div className="form-controls">
          <label>Username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
      )}
      <div className="form-controls">
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-controls">
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <input type="submit" />
    </form>
  );
}
