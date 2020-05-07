import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ShowLevel from "../../components/ShowLevel";

describe("ShowLevelのテスト", () => {
  it("やさしいと表示するか？", () => {
    // レンダリングする
    render(<ShowLevel difficult={"Easy"} />);
    expect(screen.getByText("やさしい")).toBeInTheDocument();
  });
  it("普通と表示するか？", () => {
    // レンダリングする
    render(<ShowLevel difficult={"Normal"} />);
    expect(screen.getByText("普通")).toBeInTheDocument();
  });
  it("難しいと表示するか？", () => {
    // レンダリングする
    render(<ShowLevel difficult={"Hard"} />);
    expect(screen.getByText("難しい")).toBeInTheDocument();
  });
});
