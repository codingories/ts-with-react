import React from 'react';

// 定义传入的参数类型
// 好处1.会有自动补全 2. 使用的时候获得验证
interface IHelloProps {
  message: string;
}

const Hello = (props: IHelloProps) => {
  return <h2>{props.message}</h2>;
};

export default Hello;
