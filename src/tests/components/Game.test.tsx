import React from "react";
import { render, fireEvent, getByText } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Game from "../../components/Game";
const { mockRandom, resetMockRandom } = require("jest-mock-random");

describe("15パズルテスト", () => {
  it("初期画面テスト", () => {
    const { asFragment } = render(<Game />);
    // スナップショットを取る
    expect(asFragment()).toMatchSnapshot();
  });
  it("ゲームスタート", () => {
    // 乱数のモック作成
    mockRandom([0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]);

    const { asFragment, getByLabelText, getByTestId } = render(<Game />);
    // 難易度Easyを選択
    const radio = getByLabelText("やさしい") as HTMLInputElement;
    fireEvent.click(radio);
    // 値が変わったか？
    expect(radio).toBeChecked();
    expect(radio.value).toBe("Easy");

    // IDを付けたフォームのサブミットを呼び出す
    fireEvent.submit(getByTestId("control-form"));
    // スナップショットを取る
    expect(asFragment()).toMatchSnapshot();
    // モックを戻す
    resetMockRandom();
  });
    it("ゲームスタート", () => {
    // 乱数のモック作成
    mockRandom([0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]);

    const { asFragment, getByLabelText, getByTestId } = render(<Game />);
    // 難易度Easyを選択
    const radio = getByLabelText("やさしい") as HTMLInputElement;
    fireEvent.click(radio);
    // 値が変わったか？
    expect(radio).toBeChecked();
    expect(radio.value).toBe("Easy");

    // IDを付けたフォームのサブミットを呼び出す
    fireEvent.submit(getByTestId("control-form"));
    // スナップショットを取る
    expect(asFragment()).toMatchSnapshot();
    // モックを戻す
    resetMockRandom();
  });
});
