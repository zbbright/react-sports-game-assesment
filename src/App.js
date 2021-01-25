import React from 'react'
import './App.css';
import bunnyLogo from './Assets/images/bunny.png';
import houndLogo from './Assets/images/hound.png';
import raccoonLogo from './Assets/images/raccoon.png';
import squirrelLogo from './Assets/images/squirrel.png';
import Game from './Components/game/Game.js';


  function App(props) {
    const raccoons = {
      name: 'Russiaville Raccoons',
      logoSrc: raccoonLogo
    }
  
    const squirrels = {
      name: 'Sheridan Squirrels',
      logoSrc: squirrelLogo
    }
  
    const bunnies = {
      name: 'Burlington Bunnies',
      logoSrc: bunnyLogo
    }
  
    const hounds = {
      name: 'Hammond Hounds',
      logoSrc: houndLogo
    }
  
    return (
      <div className="App">
        <Game
          venue="Union 525 Gem"
          homeTeam={squirrels}
          visitingTeam={raccoons}
        />
        <Game
          venue="Sheridan Arena"
          homeTeam={bunnies}
          visitingTeam={hounds}
        />
      </div>
    )
  }


export default App;
