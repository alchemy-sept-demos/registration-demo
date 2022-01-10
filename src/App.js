import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './views/Auth/SignIn';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <SignIn />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
