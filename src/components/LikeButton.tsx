import React, {useState, useEffect} from 'react';

const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0);
  const [on, setOn] = useState(true);
  // 默认情况下，第一次渲染完了和每次渲染之后都会执行，化繁为简就是说每一次渲染之后都会执行。
  useEffect(() => {
    document.title = `点击了${like}`;
  });
  return (
    <>
      <button onClick={() => {setLike(like + 1);}}>
        {like} 👍
      </button>
      <button onClick={() => {setOn(!on);}}>
        {on ? 'ON' : 'OFF'}
      </button>
    </>
  );
};

export default LikeButton;
