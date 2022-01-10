import React, { useState } from 'react';
import { signInUser, signupUser } from '../../services/users';
import AuthForm from '../../components/Auth/AuthForm';
import './Auth.css';
import classNames from 'classnames';

export default function Auth({ setCurrentUser }) {
  const [type, setType] = useState('signin');
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const resp =
      //   type === 'signin' ? await signInUser(email, password) : await signupUser(email, password);
      let resp;
      if (type === 'signin') {
        resp = await signInUser(email, password);
      } else {
        resp = await signupUser(email, password);
      }
      setCurrentUser(resp);
      console.log(resp);
    } catch {
      setErrorMessage('Something went wrong. Please try again.');
    }
  };
  return (
    <div>
      <div className="tabs">
        <h3
          onClick={() => {
            setType('signin');
          }}
          className={classNames({ active: type === 'signin' })}
        >
          Sign In
        </h3>
        <h3
          onClick={() => {
            setType('signup');
          }}
          className={classNames({ active: type === 'signup' })}
        >
          Sign Up
        </h3>
      </div>
      <p> Type: {type}</p>
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
