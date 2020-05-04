import React, { useState, FC } from "react";
import ShowStatus from "./ShowStatus";
import ShowLevel from "./ShowLevel";
import Board from "./Board";
import GameController from "./GameControler";
import Puzzle from "../util/puzzle";

// メインのゲームコンポーネント
const Game: FC = () => {
  // 盤面数設定
  const [puzzle, setPuzzle] = useState(new Puzzle(9));
  // 難易度の選択状態
  const [difficult, setDifficult] = useState(puzzle.difficult);
  // 初期データセット
  const answerDatas = puzzle.answerDatas;
  const gameDatas = puzzle.gameDatas;
  const sideSize = puzzle.sideSize;

  const handleDifficultChange = (difficult: string) => {
    setDifficult(difficult);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // 一旦デフォルトのイベントを止める（いるのか分からん）
    event.preventDefault();

    if (puzzle.isComplete()) {
      // 設定された難易度をセット
      puzzle.difficult = difficult;
      // ゲームデータ作成
      puzzle.generateGameDatas();
      // 動かせるセルをセット
      puzzle.setMove();
      // セット
      // useStateはイミュータブルじゃないとダメ
      // とりあえず今はインスタンスをコピーしてお茶を濁す
      const clone = Object.assign(
        Object.create(Object.getPrototypeOf(puzzle)),
        puzzle
      );
      setPuzzle(clone);
    } else {
      // ギブアップ
      // ゲーム初期化
      setPuzzle(new Puzzle(9));
    }
  };
  // 空白セルクリックハンドラ
  const handleLink = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>,
    moveIndex: number
  ) => {
    // 一旦デフォルトのイベントを止める（いるのか分からん）
    event.preventDefault();
    // 空白セルを動かす
    puzzle.move(moveIndex);
    // セット
    // useStateはイミュータブルじゃないとダメ
    // とりあえず今はインスタンスをコピーしてお茶を濁す
    const clone = Object.assign(
      Object.create(Object.getPrototypeOf(puzzle)),
      puzzle
    );
    setPuzzle(clone);
    // ゲームがクリアされていなければ、次の動かせるセルをセットする
    if (!puzzle.isComplete()) {
      // 動かせるセルをセット
      puzzle.setMove();
    }
  };

  return (
    <>
      <ShowLevel difficult={puzzle.difficult} />{" "}
      <ShowStatus isComplate={puzzle.isComplete()} />
      <table
        style={{
          border: "none",
        }}
      >
        <tbody>
          <tr>
            <td>
              <Board
                datas={gameDatas}
                sideSize={sideSize}
                moves={puzzle.moves}
                handleLink={handleLink}
              />
            </td>
            <td>　</td>
            <td>
              <Board
                datas={answerDatas}
                sideSize={sideSize}
                moves={[]}
                handleLink={() => {}}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <GameController
        difficult={difficult}
        handleSubmit={handleSubmit}
        isComplate={puzzle.isComplete()}
        onDifficultChange={handleDifficultChange}
      />
    </>
  );
};

export default Game;
