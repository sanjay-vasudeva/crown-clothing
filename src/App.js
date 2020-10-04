import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import homepage from './pages/homepage/homepage.component';

const HatsPage = () => {
  console.log('reached')
  return(
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={homepage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
