// パズルクラステスト

import Puzzle from "../../../util/puzzle";

describe("setMoveのテスト", () => {
  it("動かせるセルの特定(真ん中)", () => {
    const puzzle = new Puzzle(9);
    // 問題データ
    // いれている数字（表示する数字）はテスト上は関係ない
    puzzle.gameDatas = [0, 1, 2, 3, 4, 9, 5, 7, 8, 6];
    puzzle.emptyCellNo = 5; //真ん中が空白セル
    // 動かせるセル特定(動かせるセルの番号が入る)
    puzzle.setMove();
    // 左、右、下、上
    expect(puzzle.moves).toStrictEqual([4, 6, 8, 2]);
  });

  it("動かせるセルの特定(左上)", () => {
    const puzzle = new Puzzle(9);
    // 問題データ
    // いれている数字（表示する数字）はテスト上は関係ない
    puzzle.gameDatas = [0, 9, 1, 3, 5, 2, 6, 4, 7, 8];
    puzzle.emptyCellNo = 1; //左上が空白セル
    // 動かせるセル特定(動かせるセルの番号が入る)
    puzzle.setMove();
    // 左、右、下、上
    expect(puzzle.moves).toStrictEqual([0, 2, 4, 0]);
  });
  it("動かせるセルの特定(左下)", () => {
    const puzzle = new Puzzle(9);
    // 問題データ
    // いれている数字（表示する数字）はテスト上は関係ない
    puzzle.gameDatas = [0, 6, 8, 1, 5, 7, 2, 9, 4, 3];
    puzzle.emptyCellNo = 7; //左上が空白セル
    // 動かせるセル特定(動かせるセルの番号が入る)
    puzzle.setMove();
    // 左、右、下、上
    expect(puzzle.moves).toStrictEqual([0, 8, 0, 4]);
  });
  it("動かせるセルの特定(右上)", () => {
    const puzzle = new Puzzle(9);
    // 問題データ
    // いれている数字（表示する数字）はテスト上は関係ない
    puzzle.gameDatas = [0, 6, 8, 9, 5, 2, 1, 4, 7, 3];
    puzzle.emptyCellNo = 3; // 右上が空白セル
    // 動かせるセル特定(動かせるセルの番号が入る)
    puzzle.setMove();
    // 左、右、下、上
    expect(puzzle.moves).toStrictEqual([2, 0, 6, 0]);
  });
  it("動かせるセルの特定(右下)", () => {
    const puzzle = new Puzzle(9);
    // 問題データ
    // いれている数字（表示する数字）はテスト上は関係ない
    puzzle.gameDatas = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    puzzle.emptyCellNo = 9; // 右上が空白セル
    // 動かせるセル特定(動かせるセルの番号が入る)
    puzzle.setMove();
    // 左、右、下、上
    expect(puzzle.moves).toStrictEqual([8, 0, 0, 6]);
  });
});
