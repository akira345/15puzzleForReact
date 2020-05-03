// パズルクラステスト

import Puzzle from "../../../util/puzzle";

describe("setShuffleCountのテスト", () => {
  it("設定した難易度のシャッフル数をセットするか？(Easy)", () => {
    const puzzle = new Puzzle(9);
    puzzle.difficult = "Easy";
    puzzle.setShuffleCount();
    expect(puzzle.shuffleCount).toBe(27);
  });
  it("設定した難易度のシャッフル数をセットするか？(Normal)", () => {
    const puzzle = new Puzzle(9);
    puzzle.difficult = "Normal";
    puzzle.setShuffleCount();
    expect(puzzle.shuffleCount).toBe(54);
  });
  it("設定した難易度のシャッフル数をセットするか？(Hard)", () => {
    const puzzle = new Puzzle(9);
    puzzle.difficult = "Hard";
    puzzle.setShuffleCount();
    expect(puzzle.shuffleCount).toBe(90);
  });
});
