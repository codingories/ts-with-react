import React, {useState} from 'react';
import logo from './logo.svg';
import MouseTracker from './components/MouseTracker';

import './App.css';
import LikeButton from './components/LikeButton';
import useMousePosition from './hooks/useMousePositions'

const App: React.FC = () => {
  const [show, setShow] = useState(true);
  const positions = useMousePosition()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          <button onClick={() => {setShow(!show);}}>Toggle Tracker</button>
        </p>
        {/*{show && <MouseTracker></MouseTracker>}*/}
        <p>X: {positions.x}, Y: {positions.y}</p>
        <LikeButton></LikeButton>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
