import React from 'react';
import './App.css';
import Row from './Row'
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1>netflix-clone</h1>
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
