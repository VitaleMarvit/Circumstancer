import React from 'react';
import './App.css';
import { Decentralized } from './Components/Decentralized';
import { Header } from './Components/Header';
import { Nav } from './Components/Nav/Index';
import { WhoIs } from './Components/WhoIs';
import { Utilities } from './Components/Utilities';
import { Proyect } from './Components/369Proyect';
import { Roadmap } from './Components/RoadMap';
import { Team } from './Components/Team';
import { Footer } from './Components/Footer';


function App() {
  return (
    <React.Fragment>
      <Nav />

      <Header />

      <WhoIs />

      <Decentralized />

      <Utilities />

      <Proyect />

      <Roadmap />
      
      <Team />

      <Footer />
    </React.Fragment>
  );
}

export default App;
