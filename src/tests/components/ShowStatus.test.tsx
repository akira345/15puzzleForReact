import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ShowStatus from "../../components/ShowStatus";

describe("ShowStatusのテスト", () => {
  it("完成と表示するか？", () => {
    // レンダリングする
    render(<ShowStatus isComplate={true} />);
    expect(screen.getByText("完成")).toBeInTheDocument();
  });
  it("未完成と表示するか？", () => {
    // レンダリングする
    render(<ShowStatus isComplate={false} />);
    expect(screen.getByText("未完成")).toBeInTheDocument();
  });
});
