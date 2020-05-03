// パズルクラステスト

import Puzzle from "../../../util/puzzle";
const { mockRandom, resetMockRandom } = require("jest-mock-random");

describe("randomMoveのテスト", () => {
  it("空白セルを１つだけ動かせるか？", () => {
    const puzzle = new Puzzle(9);
    puzzle.difficult = "Easy";
    // 乱数のモック作成
    mockRandom([0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]);
    puzzle.randomMove();
    expect(puzzle.gameDatas).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 9, 8]);
    // 空白セルの位置が移動しているか？
    expect(puzzle.emptyCellNo).toBe(8);
    // モックをリセットする
    resetMockRandom();
  });
});
