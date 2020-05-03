// パズルクラステスト

import Puzzle from "../../../util/puzzle";

describe("generateAnswerDatasのテスト", () => {
  it("正解の配列を作成できるか？", () => {
    const puzzle = new Puzzle(9);
    puzzle.generateAnswerDatas();
    expect(puzzle.answerDatas).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  it("問題の初期配列を作成できるか？", () => {
    const puzzle = new Puzzle(9);
    puzzle.generateAnswerDatas();
    expect(puzzle.gameDatas).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
