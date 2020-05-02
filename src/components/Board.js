import React from 'react';
import NumberImage from './NumberImage';

// ゲーム盤を表示するコンポーネント
// props.dataに盤の配列を入れる
// 最大の数字が空白セルになる事
// 例：props.datas=[0,1,2,3,4,5,6,7,8,9](ただしゼロは使わない)
const Board = ( props ) => {
  const datas = props.datas;
  const sideSize = props.sideSize;

  // 表示データ組み立て
  const cell = ( datas, idx ) => {
    return (
      // Reactではforで回すときはkeyを付けないといけないらしい。主キーになるそうなのでユニークにしておく
      <td key={ idx }>
        <NumberImage
          datas={ datas }
          index={ idx }
          handleLink={ props.handleLink }
          moves={ props.moves }
        />
      </td >
    );
  };

  const boardData = ( datas ) => {
    // Reactでは必ず閉じタグとペアでないとダメそうなので、安易に文字列組み立て出来ない・・
    const board = [];
    let idx = 1;
    for ( let i = 0; i < sideSize; ++i ) {
      const rowData = [];
      for ( let j = 0; j < sideSize; ++j ) {
        rowData.push( cell( datas, idx ) );
        ++idx;
      }
      // Reactではforで回すときはkeyを付けないといけないらしい
      board.push( <tr key={ i }>{ rowData }</tr> );
    }
    return (
      board
    );
  };

  return (
    <table border="1">
      <tbody>
        { boardData( datas ) }
      </tbody>
    </table>
  );
};

export default Board;