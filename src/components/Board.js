import React from 'react';
import NumberImage from './NumberImage';


// ゲーム盤を表示するコンポーネント
// props.dataに盤の配列を入れる
// 最大の数字が空白セルになる事
// 例：props.datas=[1,2,3,4,5,6,7,8,9]
const Board = ( props ) => {
  const datas = props.datas;
  // 空白セル
  const maxNumber = datas.reduce( ( a, b ) => a > b ? a : b );

  // 表示データ組み立て
  const cell = ( number ) => {
    return (
      <td>
        <NumberImage
          number={ number }
        />
      </td >
    );
  };

  const boardData = ( datas ) => {
    const sideSize = Math.sqrt( datas.length );
    const board = [];
    let idx = 0;
    for ( let i = 0; i < sideSize; ++i ) {
      const rowData = [];
      for ( let j = 0; j < sideSize; j++ ) {
        rowData.push( cell( datas[ idx ] ) );
        ++idx;
      }
      board.push( <tr>{ rowData }</tr> );
    }
    return (
      board
    );
  };

  return (
    <table border="1">
      { boardData( datas ) }
    </table>
  );
};

export default Board;