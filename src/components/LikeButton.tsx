import React, {useState, useEffect, useRef} from 'react';
import useMousePosition from '../hooks/useMousePositions';

const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0);
  const likeRef = useRef(0);
  const didMountRef = useRef(false);
  const domRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // 一开始是false，第一次设置为true
    if (didMountRef.current) {
      console.log('this is updated');
    } else {
      didMountRef.current = true;
    }
  });

  function handleAlertClick() {
    setTimeout(() => {
      alert('you clicked on' + likeRef.current);
    }, 3000);
  }

  useEffect(() => {
    if (domRef && domRef.current) {
      domRef.current.focus();
    }
  });

  return (
    <>
      <input type="text" ref={domRef}></input>
      <button onClick={() => {
        setLike(like + 1);
        likeRef.current++;
      }}>
        {like} 👍
      </button>
      <button onClick={handleAlertClick}> Alert!
      </button>
    </>
  );
};

export default LikeButton;
