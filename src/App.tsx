import React, {useState} from 'react';
import logo from './logo.svg';
import MouseTracker from './components/MouseTracker';

import './App.css';
import LikeButton from './components/LikeButton';
import useMousePosition from './hooks/useMousePositions';
import useURLLoader from './hooks/useURLLoader';

interface IShowResult {
  message: string;
  status: string;
}


const App: React.FC = () => {
  const [show, setShow] = useState(true);
  const [data, loading] = useURLLoader('https://dog.ceo/api/breeds/image/random', [show]);
  const dogResult = data as IShowResult;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          <button onClick={() => {setShow(!show);}}>Refresh dog photo</button>
        </p>
        {loading ? <p>🐶读取中</p> : <img src={dogResult && dogResult.message}></img>}
      </header>
    </div>
  );
};

export default App;
