import React, {useState, useEffect} from 'react';
import useMousePosition from '../hooks/useMousePositions';

const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0);
  const [on, setOn] = useState(true);
  const positions = useMousePosition();
  // 默认情况下，第一次渲染完了和每次渲染之后都会执行，化繁为简就是说每一次渲 染之后都会执行。
  useEffect(() => {
    console.log('document title effect is running');
    document.title = `点击了${like}`;
  }, [like]);

  function handleAlertClick() {
    setTimeout(() => {
      alert('you clicked on' + like);
    }, 3000);
  }

  return (
    <>
      {/*<h2>X: {positions.x}, Y: {positions.y}</h2>*/}
      <button onClick={() => {setLike(like + 1);}}>
        {like} 👍
      </button>
      <button onClick={handleAlertClick}> Alert!
      </button>
      {/*<button onClick={() => {setOn(!on);}}>*/}
      {/*  {on ? 'ON' : 'OFF'}*/}
      {/*</button>*/}
    </>
  );
};

export default LikeButton;
