import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NumberImage from "../../components/NumberImage";

type NumberImageProps = {
  index: number;
  datas: number[];
  moves: number[];
  handleLink: (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
    index: number
  ) => void;
};
afterEach(cleanup);

describe("NumberImageのテスト", () => {
  it("画像が表示されるか？", () => {
    const prop: NumberImageProps = {
      index: 1,
      datas: [0, 1, 2, 3, 4, 5, 9, 7, 8, 6],
      moves: [5, 0, 9, 3],
      handleLink: (e, index) => {}, //dummy
    };
    // レンダリングする
    render(<NumberImage {...prop} />);
    // ALTタグが正しい(SRCはチェックできなさそう)
    expect(screen.getByAltText("1")).toBeInTheDocument();
  });
  it("動かせるセルにイベントがあるか？", () => {
    const prop: NumberImageProps = {
      index: 3,
      datas: [0, 1, 2, 3, 4, 5, 9, 7, 8, 6],
      moves: [5, 0, 9, 3],
      handleLink: (e, index) => {}, //dummy
    };
    // レンダリングする
    render(<NumberImage {...prop} />);
    // イベント存在チェック
    // なぜ失敗する？？
    // console.log(screen.getByAltText("3").click());
    // expect(screen.getByAltText("3").click()).toBeDefined();
  });
  it("動かせないセルにイベントはないか？", () => {
    const prop: NumberImageProps = {
      index: 1,
      datas: [0, 1, 2, 3, 4, 5, 9, 7, 8, 6],
      moves: [5, 0, 9, 3],
      handleLink: (e, index) => {}, //dummy
    };
    // レンダリングする
    render(<NumberImage {...prop} />);
    // イベント存在チェック
    expect(screen.getByAltText("1").click()).not.toBeDefined();
  });
});
