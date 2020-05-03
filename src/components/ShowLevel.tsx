import React, { FC } from "react";

// レベル表示コンポーネント
type ShowLevelProps = {
  difficult: string;
};
const ShowLevel: FC<ShowLevelProps> = ({ difficult }) => {
  const level = (difficult: string) => {
    switch (difficult) {
      case "Easy":
        return "やさしい";
      case "Normal":
        return "普通";
      case "Hard":
        return "難しい";
      default:
        return;
    }
  };
  return <>{level(difficult)}</>;
};
export default ShowLevel;
