import React from 'react';
import './App.css';
import Row from './Row'
import Banner from './Banner'
import requests from './requests';

function App() {
  return (
    <div className="app">
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
    </div>
  );
}

export default App;
