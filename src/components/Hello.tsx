import React from 'react';


interface IHelloProps {
  message?: string;
}

// 通过React.FunctionComponent这个接口来实现
const Hello: React.FC<IHelloProps> = (props) => {
  return <h2>{props.message}</h2>;
};

// 这样写了之后会有默认值
Hello.defaultProps = {
  message: 'Hello World123'
};

export default Hello;
