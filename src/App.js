import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './layouts/css/main.css';
import Header from './components/Header';
import HowItWorks from './pages/HowItWorks';
import About from './pages/About';
import Form from './components/Content';
function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <Switch>
        <Route exact path="/how-it-works" component={HowItWorks} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
