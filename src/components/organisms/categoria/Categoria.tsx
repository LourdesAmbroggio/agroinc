import { Button } from 'antd';
import React from 'react';
interface Props {
  image: string;
  text?: string;
}

const Categoria = (props: Props) => {
  return (
    <div
      style={{
        width: 163,
        height: 161,
        backgroundImage: `url(${props.image})`,
        objectFit: 'fill',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div className='container-button__category-btn'>
        <Button type="primary">{props.text}</Button>
      </div>
    </div>
  );
};

export default Categoria;
