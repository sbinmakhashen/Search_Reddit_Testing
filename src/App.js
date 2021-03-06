import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import './layouts/css/main.css';
import Header from './components/Header';
import HowItWorks from './pages/HowItWorks';
import About from './pages/About';
import Form from './components/Content';
import FooterContent from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      {/* main page content section */}
      <FooterContent />
      <Switch>
        <Route exact path="/" component={Form} />
        <Route path="/how-it-works" component={HowItWorks} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
