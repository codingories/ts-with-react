import React, {useState, useEffect} from 'react';

const MouseTracker: React.FC = () => {
  const [positions, setPositions] = useState({x: 0, y: 0});
  useEffect(() => {
    console.log('add effect', positions.x)
    const updateMouse = (e: MouseEvent) => {
      console.log('inner');
      setPositions({x: e.clientX, y: e.clientY});
    };
    document.addEventListener('click', updateMouse);
    // 清除掉监听
    return () => {
      console.log('remove effect', positions.x)
      document.removeEventListener('click', updateMouse);
    };
    // 传递空数组，表示effect不依赖props或者state的任何值，所以它永远不会重复执行。
  }, []);
  console.log('before render', positions.x)
  return (
    <p>X: {positions.x}, Y: {positions.y}</p>
  );
};

export default MouseTracker;
