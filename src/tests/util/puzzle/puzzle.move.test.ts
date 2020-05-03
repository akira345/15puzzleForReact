// パズルクラステスト

import Puzzle from "../../../util/puzzle";

describe("moveのテスト", () => {
  it("空白セルの入れ替えが出来るか？", () => {
    const puzzle = new Puzzle(9);
    // ゲームデータセット
    puzzle.gameDatas = [0, 6, 7, 3, 9, 1, 8, 2, 5, 4];
    // 真ん中のセルを左に動かす
    puzzle.emptyCellNo = 4; //空白セルは左端の真ん中のセル
    puzzle.move(5); //右隣のセルを動かす
    // 空白セルが移動したゲームデータが出来る
    expect(puzzle.gameDatas).toStrictEqual([0, 6, 7, 3, 1, 9, 8, 2, 5, 4]);
    // 空白セルの位置が変わる
    expect(puzzle.emptyCellNo).toBe(5);
  });
  it("完成形の場合動かそうとしてもうごかせないか？", () => {
    const puzzle = new Puzzle(9);
    // ゲームデータセット
    puzzle.gameDatas = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    // 右下のセルを右に動かす
    puzzle.emptyCellNo = 9;
    puzzle.move(8); //左隣のセルを動かす
    // 変化なしのはず
    expect(puzzle.gameDatas).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    // 空白セルの位置もそのまま
    expect(puzzle.emptyCellNo).toBe(9);
  });
  it("値が不正の場合無視されるか？（その１）", () => {
    const puzzle = new Puzzle(9);
    // ゲームデータセット
    puzzle.gameDatas = [0, 6, 7, 3, 9, 1, 8, 2, 5, 4];
    // 空白セルの位置をセット
    puzzle.emptyCellNo = 4;
    // 不正な値をセット
    puzzle.move(0);
    // 変化なしのはず
    expect(puzzle.gameDatas).toStrictEqual([0, 6, 7, 3, 9, 1, 8, 2, 5, 4]);
    // 空白セルの位置もそのまま
    expect(puzzle.emptyCellNo).toBe(4);
  });
  it("値が不正の場合無視されるか？（その２）", () => {
    const puzzle = new Puzzle(9);
    // ゲームデータセット
    puzzle.gameDatas = [0, 6, 7, 3, 9, 1, 8, 2, 5, 4];
    // 空白セルの位置をセット
    puzzle.emptyCellNo = 4;
    // 不正な値をセット
    puzzle.move(10);
    // 変化なしのはず
    expect(puzzle.gameDatas).toStrictEqual([0, 6, 7, 3, 9, 1, 8, 2, 5, 4]);
    // 空白セルの位置もそのまま
    expect(puzzle.emptyCellNo).toBe(4);
  });
  it("値が不正の場合無視されるか？（その３）", () => {
    const puzzle = new Puzzle(9);
    // ゲームデータセット
    puzzle.gameDatas = [0, 6, 7, 3, 9, 1, 8, 2, 5, 4];
    // 空白セルの位置をセット
    puzzle.emptyCellNo = 4;
    // 不正な値をセット(動かせないセル番号を指定)
    puzzle.move(8);
    // 変化なしのはず
    expect(puzzle.gameDatas).toStrictEqual([0, 6, 7, 3, 9, 1, 8, 2, 5, 4]);
    // 空白セルの位置もそのまま
    expect(puzzle.emptyCellNo).toBe(4);
  });
});
