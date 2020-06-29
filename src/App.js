import React from 'react';
import './App.css';
import { StylesProvider } from '@material-ui/core/styles';
import Home from './components/Home';

function App() {
  return (
    <StylesProvider injectFirst>
      <div className="App">
        <header className="App-header">
          <Home />
        </header>
      </div>
    </StylesProvider>
  );
}

export default App;
