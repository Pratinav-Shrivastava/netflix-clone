import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
    <h1>Hey Pratinav lets build Netflix Clone today </h1>
    <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} />
    <Row title="Trending Now" fetchURL={requests.fetchTrending} />
    </div>
  );
}

export default App;
