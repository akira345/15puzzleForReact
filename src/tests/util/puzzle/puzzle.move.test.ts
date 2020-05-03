// パズルクラステスト

import Puzzle from "../../../util/puzzle";
const { mockRandom, resetMockRandom } = require("jest-mock-random");

describe("moveのテスト", () => {
  it("空白セルの入れ替えが出来るか？", () => {
    const puzzle = new Puzzle(9);
    puzzle.difficult = "Easy";
    // 乱数のモック作成
    mockRandom([0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]);
    // ゲームデータ生成
    puzzle.generateGameDatas();
    puzzle.setMove();
    // 動かす前のデータ
    // [0, 1, 2, 3, 4, 5, 9, 7, 8, 6]
    // 動かせるセルの番号
    // [ 5, 0, 9, 3 ]
    // 動かす
    puzzle.move(9);
    // 動かした後のゲームデータチェック
    expect(puzzle.gameDatas).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    // モックをリセットする
    resetMockRandom();
  });

  it("不正な値をいれたとき無視されるか？(その１）", () => {
    const puzzle = new Puzzle(9);
    puzzle.difficult = "Easy";
    // 乱数のモック作成
    mockRandom([0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]);
    // ゲームデータ生成
    puzzle.generateGameDatas();
    puzzle.setMove();
    // 動かす前のデータ
    // [0, 1, 2, 3, 4, 5, 9, 7, 8, 6]
    // 動かせるセルの番号
    // [ 5, 0, 9, 3 ]
    // 不正な値をセット
    puzzle.move(-1);
    // 動かした後のゲームデータチェック(変わらないはず)
    expect(puzzle.gameDatas).toStrictEqual([0, 1, 2, 3, 4, 5, 9, 7, 8, 6]);
    // モックをリセットする
    resetMockRandom();
  });
  it("不正な値をいれたとき無視されるか？(その２）", () => {
    const puzzle = new Puzzle(9);
    puzzle.difficult = "Easy";
    // 乱数のモック作成
    mockRandom([0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]);
    // ゲームデータ生成
    puzzle.generateGameDatas();
    puzzle.setMove();
    // 動かす前のデータ
    // [0, 1, 2, 3, 4, 5, 9, 7, 8, 6]
    // 動かせるセルの番号
    // [ 5, 0, 9, 3 ]
    // 不正な値をセット
    puzzle.move(10);
    // 動かした後のゲームデータチェック(変わらないはず)
    expect(puzzle.gameDatas).toStrictEqual([0, 1, 2, 3, 4, 5, 9, 7, 8, 6]);
    // モックをリセットする
    resetMockRandom();
  });
  it("動かせないセル番号を指定したときに無視されるか？", () => {
    const puzzle = new Puzzle(9);
    puzzle.difficult = "Easy";
    // 乱数のモック作成
    mockRandom([0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]);
    // ゲームデータ生成
    puzzle.generateGameDatas();
    puzzle.setMove();
    // 動かす前のデータ
    // [0, 1, 2, 3, 4, 5, 9, 7, 8, 6]
    // 動かせるセルの番号
    // [ 5, 0, 9, 3 ]
    // 動かせない番号をセット
    puzzle.move(1);
    // 動かした後のゲームデータチェック(変わらないはず)
    expect(puzzle.gameDatas).toStrictEqual([0, 1, 2, 3, 4, 5, 9, 7, 8, 6]);
    // モックをリセットする
    resetMockRandom();
  });
  it("完成形の時は無視されるか？（その１）", () => {
    const puzzle = new Puzzle(9);
    puzzle.difficult = "Easy";
    puzzle.setMove();
    puzzle.move(9);
    // 動かした後のゲームデータチェック
    expect(puzzle.gameDatas).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    // モックをリセットする
    resetMockRandom();
  });
  it("完成形の時は無視されるか？（その２）", () => {
    const puzzle = new Puzzle(9);
    puzzle.difficult = "Easy";
    puzzle.setMove();
    puzzle.move(-9);
    // 動かした後のゲームデータチェック
    expect(puzzle.gameDatas).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    // モックをリセットする
    resetMockRandom();
  });
});
