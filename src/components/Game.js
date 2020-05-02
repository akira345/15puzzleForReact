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
  // 初期データセット
  const answerDatas = puzzle.answerDatas;
  // ゲーム初期データセット
  const gameDatas = puzzle.gameDatas;
  const sideSize = puzzle.sideSize;
  const difficult = puzzle.difficult;

  // スタートボタンハンドラ
  const handleSubmit = ( event ) => {
    // 一旦デフォルトのイベントを止める（いるのか分からん）
    event.preventDefault();
    if ( event.target.submit.value === 'スタート' ) {
      // 設定された難易度をセット
      puzzle.difficult = event.target.difficult.value;
      // ランダム作成
      puzzle.generateGameDatas();

      // 動かせるセルをセット
      puzzle.setMove();
      // セット
      // useStateはイミュータブルじゃないとダメ
      // とりあえず今はインスタンスをコピーしてお茶を濁す
      const clone = Object.assign( Object.create( Object.getPrototypeOf( puzzle ) ), puzzle );
      setPuzzle( clone );
    } else {
      // ギブアップ
      // ゲーム初期化
      setPuzzle( new Puzzle( 9 ) );
    }

  };
  // 空白セルクリックハンドラ
  const handleLink = ( event, moveIndex ) => {
    // 一旦デフォルトのイベントを止める（いるのか分からん）
    event.preventDefault();

    // 空白セルを動かす
    puzzle.move( moveIndex );
    // セット
    // useStateはイミュータブルじゃないとダメ
    // とりあえず今はインスタンスをコピーしてお茶を濁す
    const clone = Object.assign( Object.create( Object.getPrototypeOf( puzzle ) ), puzzle );
    setPuzzle( clone );
    // ゲームがクリアされていなければ、次の動かせるセルをセットする
    if ( !puzzle.isComplete() ) {
      // 動かせるセルをセット
      puzzle.setMove();
    }
  };

  return (
    <>
      <ShowLevel
        difficult={ difficult }
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
                moves={ puzzle.moves }
                handleLink={ handleLink }
              />
            </td>
            <td>　</td>
            <td>
              <Board
                datas={ answerDatas }
                sideSize={ sideSize }
                moves={ [] }
                handleLink={ () => { } }
              />
            </td>
          </tr>
        </tbody>
      </table>
      <GameController
        difficult={ difficult }
        handleSubmit={ handleSubmit }
        isComplate={ puzzle.isComplete() }
      />
    </>
  );
};

export default Game;