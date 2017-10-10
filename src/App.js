import React from 'react';
import './App.css';

import StartButton from './components/StartButton';

import ModalContainer from './containers/ModalContainer';

const App = () => (
  <div className="App">
    <StartButton />

    <ModalContainer />
  </div>
);

export default App;
