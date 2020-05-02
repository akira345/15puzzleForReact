import React from 'react';
// 画像を表示するコンポーネント
const NumberImage = ( props ) => {
  const index = props.index;
  const number = props.datas[ index ];
  const moves = props.moves;
  const imagePath = "/gif/" + number + ".gif";
  // 動かせるセルにはリンクを張る
  if ( moves.includes( index ) ) {
    // イベントハンドラに値を渡す場合は少々厄介らしい
    return (
      <img
        src={ imagePath }
        alt={ number }
        onClick={ ( e ) => props.handleLink( e, index ) }
      />
    );
  }
  return (
    <img src={ imagePath } alt={ number } />
  );
};

export default NumberImage;