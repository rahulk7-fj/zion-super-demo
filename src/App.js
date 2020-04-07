import React from 'react';
import { Router , Route,  Switch} from 'react-router-dom'
import { createBrowserHistory } from 'history';
import Startup from './components/Startup'
import SignUp from './components/signUp'
import SignIn from './components/signIn'
import './App.css';

const history = createBrowserHistory({
  basename : '/'
});

console.log(history)

function App() {
  return (
    <div className="App">
          <Router history={history}>
            <Switch>
            <Route exact path="/" component={Startup}></Route>
            <Route exact path="/register" component={SignUp}></Route>
            <Route exact path="/login" component={SignIn}></Route>
            </Switch>   
          </Router>
         
    </div>
  );
}

export default App;
