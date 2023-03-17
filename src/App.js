import './App.css';
import React from 'react';
import { Routes, Route, Link} from "react-router-dom";
import NewGame from './Components/NewGame';
import Players from './Components/Players';
import SinglePlayerInstructions from './Components/SinglePlayerInstructions';
import MultiplayerInstructions from './Components/MultiplayerInstructions';
import SinglePlayer from './Components/SinglePlayer';
import MultiPlayer from './Components/MultiPlayer';


function App() {


  return (
    <div className="App">
      <div className="container">
            <Link to='/'>
                <button className="home-button">
                    Home
                </button>
            </Link>
        <Routes>
          <Route path='/' element={<NewGame />} />
          <Route path='/players' element={<Players />} />
          <Route path='/single-player-instructions' element={<SinglePlayerInstructions />} />
          <Route path='/multi-player-instructions' element={<MultiplayerInstructions />} />
          <Route path='/single-player' element={<SinglePlayer />} />
          <Route path='/multi-player' element={<MultiPlayer />} />
        </Routes>
        </div>
    </div>
  );
}

export default App;
