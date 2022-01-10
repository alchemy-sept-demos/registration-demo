import './App.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import SignIn from './views/Auth/SignIn';
import { useState } from 'react';
import { getUser, logout } from './services/users';
import SignUp from './views/Auth/SignUp';
import Auth from './views/Auth/Auth';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());
  console.log('CURRENT USER: ', currentUser);
  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* <Route path="/auth" exact>
            <Auth />
          </Route> */}

          {/* <Route path="/auth/:type">
            <Auth />
          </Route> */}

          <Route exact path="/">
            {currentUser && (
              <>
                <h1>I am Signed In</h1>
                <button onClick={logoutUser}>Log Out</button>
              </>
            )}
            {!currentUser && <Auth setCurrentUser={setCurrentUser} />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
