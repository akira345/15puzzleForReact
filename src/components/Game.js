import React, { useState } from 'react';
import ShowStatus from './ShowStatus';
import ShowLevel from './ShowLevel';
import Board from './Board';
import GameController from './GameControler';
import Puzzle from '../util/puzzle';

// メインのゲームコンポーネント
const Game = () => {

  // 盤面数設定
  const [ puzzle, setPuzzle ] = useState( new Puzzle( 9 ) );
  console.log( "初期値" );
  console.log( puzzle.emptyCellNo );
  console.log( puzzle.totalCount );
  // 初期データセット
  const answerDatas = puzzle.answerDatas;
  // ゲーム初期データセット
  const gameDatas = puzzle.gameDatas;
  const sideSize = puzzle.sideSize;

  const handleSubmit = ( event ) => {
    // 一旦デフォルトのイベントを止める（いるのか分からん）
    event.preventDefault();
    if ( event.target.submit.value === 'スタート' ) {
      // 設定された難易度をセット
      puzzle.difficult = event.target.difficult.value;
      // ランダム作成
      puzzle.generateGameDatas();
      console.log( puzzle.gameDatas );
      // セット
      // useStateはイミュータブルじゃないとダメ
      // とりあえず今はインスタンスをコピーしてお茶を濁す
      const clone = Object.assign( Object.create( Object.getPrototypeOf( puzzle ) ), puzzle );
      setPuzzle( clone );
    } else {
      // ゲーム初期化
      setPuzzle( new Puzzle( 9 ) );
    }

  };

  return (
    <>
      <ShowLevel
        difficult={ puzzle.difficult }
      />        <ShowStatus
        isComplate={ puzzle.isComplete() }
      />
      <table border="0" >
        <tbody>
          <tr>
            <td>
              <Board
                datas={ gameDatas }
                sideSize={ sideSize }
              />
            </td>
            <td>　</td>
            <td>
              <Board
                datas={ answerDatas }
                sideSize={ sideSize }
              />
            </td>
          </tr>
        </tbody>
      </table>
      <GameController
        handleSubmit={ handleSubmit }
        isComplate={ puzzle.isComplete() }
      />
    </>
  );
};

export default Game;