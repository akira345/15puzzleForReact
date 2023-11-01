import React from "react";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
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

    const {
      asFragment,
      getByLabelText,
      getByTestId,
      queryByLabelText,
    } = render(<Game />);
    // 難易度Easyを選択
    const radio = getByLabelText("やさしい") as HTMLInputElement;
    fireEvent.click(radio);
    // 値が変わったか？
    expect(radio).toBeChecked();
    expect(radio.value).toBe("Easy");

    // IDを付けたフォームのサブミットを呼び出す
    fireEvent.submit(getByTestId("control-form"));
    // スタートボタンがギブアップになる
    const submit = getByTestId("control-submit") as HTMLInputElement;
    expect(submit.value).toBe("ギブアップ");
    // ラジオボタンは非表示のはず
    expect(queryByLabelText("やさしい")).toBeNull();

    // スナップショットを取る
    expect(asFragment()).toMatchSnapshot();
    // モックを戻す
    resetMockRandom();
  });

  it("ゲームスタート後ギブアップ", () => {
    // 乱数のモック作成
    mockRandom([0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]);

    const {
      asFragment,
      getByLabelText,
      getByTestId,
      getByText,
      queryByLabelText,
    } = render(<Game />);
    // 難易度Easyを選択
    const radio = getByLabelText("やさしい") as HTMLInputElement;
    fireEvent.click(radio);
    // 値が変わったか？
    expect(radio).toBeChecked();
    expect(radio.value).toBe("Easy");

    // IDを付けたフォームのサブミットを呼び出す
    fireEvent.submit(getByTestId("control-form"));

    // スタートボタンがギブアップになる
    const beforeSubmit = getByTestId("control-submit") as HTMLInputElement;
    expect(beforeSubmit.value).toBe("ギブアップ");

    // ギブアップボタンを押す
    fireEvent.submit(getByTestId("control-form"));

    // ギブアップがスタートボタンになる
    const afterSubmit = getByTestId("control-submit") as HTMLInputElement;
    expect(afterSubmit.value).toBe("スタート");

    // 難易度がリセットされデフォルトの表示になる
    expect(getByText("普通 完成")).toBeInTheDocument();

    // ラジオボタンは表示され、選択したままのはず
    expect(queryByLabelText("やさしい")).toBeInTheDocument();
    expect(radio).toBeChecked();
    expect(radio.value).toBe("Easy");

    // スナップショットを取る
    expect(asFragment()).toMatchSnapshot();
    // モックを戻す
    resetMockRandom();
  });

  it("セルを動かす(未完成)", () => {
    // 乱数のモック作成
    mockRandom([0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]);

    const {
      asFragment,
      getByLabelText,
      getByTestId,
      getAllByAltText,
      getByText,
      queryByLabelText,
    } = render(<Game />);
    // 難易度Easyを選択
    const radio = getByLabelText("やさしい") as HTMLInputElement;
    fireEvent.click(radio);

    // IDを付けたフォームのサブミットを呼び出す
    fireEvent.submit(getByTestId("control-form"));

    // 空白セルを動かす
    // この乱数モックで作成される問題は以下の通り
    // [0,1,2,3,4,5,9,7,8,6]

    //3番目のセル(番号は3)を上に動かす
    const moveCell = getAllByAltText("3");
    fireEvent.click(moveCell[0]);

    // 未完成のはず
    expect(getByText("やさしい 未完成")).toBeInTheDocument();

    // ボタンはそのままのはず
    const submit = getByTestId("control-submit") as HTMLInputElement;
    expect(submit.value).toBe("ギブアップ");

    // ラジオボタンは非表示のはず
    expect(queryByLabelText("やさしい")).toBeNull();

    // スナップショットを取る
    expect(asFragment()).toMatchSnapshot();
    // モックを戻す
    resetMockRandom();
  });
  it("セルを動かす(完成)", () => {
    // 乱数のモック作成
    mockRandom([0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]);

    const {
      asFragment,
      getByLabelText,
      getByTestId,
      getAllByAltText,
      getByText,
      queryByLabelText,
    } = render(<Game />);
    // 難易度Easyを選択
    const radio = getByLabelText("やさしい") as HTMLInputElement;
    fireEvent.click(radio);

    // IDを付けたフォームのサブミットを呼び出す
    fireEvent.submit(getByTestId("control-form"));

    // 空白セルを動かす
    // この乱数モックで作成される問題は以下の通り
    // [0,1,2,3,4,5,9,7,8,6]

    //9番目のセル(番号は6)を上に動かす
    const moveCell = getAllByAltText("6");
    fireEvent.click(moveCell[0]);

    // 完成しているはず
    expect(getByText("やさしい 完成")).toBeInTheDocument();

    // ラジオボタンは表示され、選択したままのはず
    expect(queryByLabelText("やさしい")).toBeInTheDocument();
    expect(radio).toBeChecked();
    expect(radio.value).toBe("Easy");

    // 完成していたらボタンがスタートになるはず
    const submit = getByTestId("control-submit") as HTMLInputElement;
    expect(submit.value).toBe("スタート");

    // スナップショットを取る
    expect(asFragment()).toMatchSnapshot();
    // モックを戻す
    resetMockRandom();
  });
});
