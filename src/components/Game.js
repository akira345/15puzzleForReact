import React from 'react';
import ShowStatus from './ShowStatus';
import ShowLevel from './ShowLevel';
import Board from './Board';
import GameController from './GameControler';

// メインのゲームコンポーネント
const Game = () => {
  return (
    <>
      <ShowLevel />        <ShowStatus />
      <table border="0" >
        <tr>
          <td>
            <Board
              datas={ [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] }
            />
          </td>
          <td>　</td>
          <td>
            <Board
              datas={ [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] }
            />
          </td>
        </tr>
      </table>
      <GameController />
    </>
  );
};

export default Game;