import React, { useState } from 'react';
import { signInUser } from '../../services/users';
import AuthForm from '../../components/Auth/AuthForm';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await signInUser(email, password);
    console.log(resp);
  };
  return (
    <div>
      <AuthForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
