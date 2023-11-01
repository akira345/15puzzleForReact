// パズルクラステスト

import Puzzle from "../../../util/puzzle";
import { mockRandom, resetMockRandom } from "jest-mock-random";

describe("isCompleteのテスト", () => {
  it("正解判定", () => {
    const puzzle = new Puzzle(9);
    // 初期状態は正解のはず
    expect(puzzle.isComplete()).toBe(true);
  });
  it("不正解判定", () => {
    const puzzle = new Puzzle(9);
    puzzle.difficult = "Easy";
    // 乱数のモック作成
    mockRandom([0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]);
    // 問題作成時は不正解のはず
    puzzle.generateGameDatas();
    // モックを戻す
    resetMockRandom();
    expect(puzzle.isComplete()).toBe(false);
  });
});
