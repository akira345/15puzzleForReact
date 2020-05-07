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
};

// メインのゲームコンポーネント
const Game: FC = () => {
  const forceRender = useForceRender();
  // 盤面数設定
  // useRef()はコンポーネントを再描画したときでも、常に同じ参照を指すことが保証されている。
  // useRefで渡した引数は初期値で、currentプロパティに保持される。
  const puzzleRef = useRef<Puzzle>(new Puzzle(9));
  const puzzle = puzzleRef.current;
  // 難易度の選択状態
  const [difficult, setDifficult] = useState(puzzle.difficult);
  // 初期データセット
  const answerDatas = puzzle.answerDatas;
  const gameDatas = puzzle.gameDatas;
  const sideSize = puzzle.sideSize;

  const handleDifficultChange = (difficult: string) => {
    // ラジオボタンが変更されたイベントを基に難易度をセットする
    setDifficult(difficult);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // 一旦デフォルトのイベントを止める
    event.preventDefault();

    if (puzzle.isComplete()) {
      // 設定された難易度をセット
      puzzle.difficult = difficult;
      // ゲームデータ作成
      puzzle.generateGameDatas();
      // 動かせるセルをセット
      puzzle.setMove();
    } else {
      // ギブアップ
      // ゲーム初期化
      puzzleRef.current = new Puzzle(9);
      // ゲーム初期化時難易度をデフォルトにする。
      //（クラスのコンストラクタでセットしていても、useStateはキャッシュするので)
      setDifficult("Normal");
    }
    forceRender();
  };
  // 空白セルクリックハンドラ
  const handleLink = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>,
    moveIndex: number
  ) => {
    // 一旦デフォルトのイベントを止める
    // これはブラウザのデフォルトイベントを止めるのに必要らしい。
    // 参考：https://qiita.com/tochiji/items/4e9e64cabc0a1cd7a1ae
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
