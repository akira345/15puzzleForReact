import React from 'react';
// 画像を表示するコンポーネント
const NumberImage = ( props ) => {
  const imagePath = "/gif/" + props.number + ".gif";
  return (
    <img src={ imagePath } alt={ props.number } />
  );
};

export default NumberImage;