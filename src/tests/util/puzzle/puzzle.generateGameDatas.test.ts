// パズルクラステスト

import Puzzle from "../../../util/puzzle";
const { mockRandom, resetMockRandom } = require("jest-mock-random");

describe("generateGameDatasのテスト", () => {
  it("問題の配列を作成できるか？", () => {
    const puzzle = new Puzzle(9);
    puzzle.difficult = "Easy";
    // 乱数のモック作成
    mockRandom([0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]);
    puzzle.generateGameDatas();
    expect(puzzle.gameDatas).toStrictEqual([0, 1, 2, 3, 4, 5, 9, 7, 8, 6]);
    //空白セルの位置が変わっているか？
    expect(puzzle.emptyCellNo).toBe(6);
    // モックをリセットする
    resetMockRandom();
  });
});
