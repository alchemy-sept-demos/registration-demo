import './App.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import SignIn from './views/Auth/SignIn';
import { useState } from 'react';
import { getUser } from './services/users';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());
  console.log('CURRENT USER: ', currentUser);
  return (
    <div className="App">
      <BrowserRouter>
        <NavLink to="/signin"> Sign In </NavLink>
        <NavLink to="/signup"> Sign Up </NavLink>
        <Switch>
          <Route path="/signin" exact>
            <SignIn />
          </Route>
          <Route path="/">
            {currentUser && <h1>I am Signed In</h1>}
            {!currentUser && <h1>I am NOT signed In</h1>}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
