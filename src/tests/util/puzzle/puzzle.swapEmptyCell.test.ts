// パズルクラステスト

import Puzzle from "../../../util/puzzle";

describe("swapEmptyCellのテスト", () => {
  it("空白セルの入れ替えが出来るか？", () => {
    const puzzle = new Puzzle(9);
    // ゲームデータセット
    puzzle.gameDatas = [0, 6, 7, 3, 9, 1, 8, 2, 5, 4];
    // 真ん中のセルを左に動かす
    puzzle.emptyCellNo = 4; //空白セルは左端の真ん中のセル
    puzzle.swapEmptyCell(5); //右隣のセルを動かす
    // 空白セルが移動したゲームデータが出来る
    expect(puzzle.gameDatas).toStrictEqual([0, 6, 7, 3, 1, 9, 8, 2, 5, 4]);
    // 空白セルの位置が変わる
    expect(puzzle.emptyCellNo).toBe(5);
  });
});
