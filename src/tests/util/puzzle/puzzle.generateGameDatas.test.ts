// パズルクラステスト

import Puzzle from "../../../util/puzzle";
const { mockRandom, resetMockRandom } = require("jest-mock-random");

describe("generateGameDatasのテスト", () => {
  it("問題の配列を作成できるか？(Easy)", () => {
    const puzzle = new Puzzle(9);
    puzzle.difficult = "Easy";
    // 乱数のモック作成
    mockRandom([0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]);
    puzzle.generateGameDatas();
    expect(puzzle.gameDatas).toStrictEqual([0, 1, 2, 3, 4, 5, 9, 7, 8, 6]);
    // モックをリセットする
    resetMockRandom();
  });
  it("問題の配列を作成できるか？(Normal)", () => {
    const puzzle = new Puzzle(9);
    puzzle.difficult = "Normal";
    // 乱数のモック作成
    mockRandom([0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]);
    puzzle.generateGameDatas();
    expect(puzzle.gameDatas).toStrictEqual([0, 1, 2, 9, 4, 5, 3, 7, 8, 6]);
    // モックをリセットする
    resetMockRandom();
  });
  it("問題の配列を作成できるか？(Hard)", () => {
    const puzzle = new Puzzle(9);
    puzzle.difficult = "Hard";
    // 乱数のモック作成
    mockRandom([0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]);
    puzzle.generateGameDatas();
    expect(puzzle.gameDatas).toStrictEqual([0, 1, 2, 9, 4, 5, 3, 7, 8, 6]);
    // モックをリセットする
    resetMockRandom();
  });
});
