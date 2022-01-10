import React, { useState } from 'react';
import { signupUser } from '../../services/users';
import AuthForm from '../../components/Auth/AuthForm';

export default function SignUp() {
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await signupUser(email, password);
      console.log(resp);
    } catch {
      setErrorMessage('Something went wrong. Please try again.');
    }
  };
  return (
    <div>
      <h1>Sign Up User</h1>
      <AuthForm
        errorMessage={errorMessage}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
