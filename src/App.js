import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { getUser } from './services/users';

import Auth from './views/Auth/Auth';
import Home from './views/Home';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser();
      setCurrentUser(user);
    };
    fetchUser();
  }, []);
  console.log('CURRENT USER: ', currentUser);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {currentUser && <Home currentUser={currentUser} setCurrentUser={setCurrentUser} />}
            {!currentUser && <Auth setCurrentUser={setCurrentUser} />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
