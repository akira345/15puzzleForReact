// パズルクラステスト

import Puzzle from "../../../util/puzzle";
const { mockRandom, resetMockRandom } = require("jest-mock-random");

describe("setMoveのテスト", () => {
  it("動かせるセルの特定", () => {
    const puzzle = new Puzzle(9);
    puzzle.difficult = "Easy";
    // 乱数のモック作成
    mockRandom([0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]);
    // ゲームデータ生成
    puzzle.generateGameDatas();
    // 動かせるセル特定(動かせるセルの番号が入る)
    puzzle.setMove();
    // 左、右、下、上
    expect(puzzle.moves).toStrictEqual([5, 0, 9, 3]);
    // モックをリセットする
    resetMockRandom();
  });
});
