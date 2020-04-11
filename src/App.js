import React from 'react';
import NavBar from './components/Header/NavBar'
import Content from './components/Card/Card'
import Clan from './components/Clans/Clans'
import './App.css';

function App() {
  return (
<div className="App">
  <Clan />
  <NavBar />
  <Content />
</div>
  );
}

export default App;
