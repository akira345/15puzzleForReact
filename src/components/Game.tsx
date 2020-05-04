import React, { useState, FC, useRef } from "react";
import ShowStatus from "./ShowStatus";
import ShowLevel from "./ShowLevel";
import Board from "./Board";
import GameController from "./GameControler";
import Puzzle from "../util/puzzle";

/**
 * 強制的に再描画する関数を返すカスタムhook
 */
const useForceRender = () => {
  // つかわないのでアンスコにしている
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, set] = useState({});
  return () => set({});
}

// メインのゲームコンポーネント
const Game: FC = () => {
  const forceRender = useForceRender();
  // 盤面数設定
  const puzzleRef = useRef<Puzzle>(new Puzzle(9));
  const puzzle = puzzleRef.current;
  // 初期データセット
  const answerDatas = puzzle.answerDatas;
  const gameDatas = puzzle.gameDatas;
  const sideSize = puzzle.sideSize;
  const difficult = puzzle.difficult;

  // スタートボタンハンドラ
  // ここのAnyをどうにかしたいが出来るのか？
  const handleSubmit = (event: any) => {
    // 一旦デフォルトのイベントを止める（いるのか分からん）
    event.preventDefault();

    if (event.currentTarget.submit.value === "スタート") {
      // 設定された難易度をセット
      puzzle.difficult = event.currentTarget.difficult.value;
      // ゲームデータ作成
      puzzle.generateGameDatas();
      // 動かせるセルをセット
      puzzle.setMove();
    } else {
      // ギブアップ
      // ゲーム初期化
      puzzleRef.current = new Puzzle(9);
    }
    forceRender();
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
    forceRender();
    // ゲームがクリアされていなければ、次の動かせるセルをセットする
    if (!puzzle.isComplete()) {
      // 動かせるセルをセット
      puzzle.setMove();
    }
  };

  return (
    <>
      <ShowLevel difficult={difficult} />{" "}
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
      />
    </>
  );
};

export default Game;
