import React, { FC } from "react";

// 画像を表示するコンポーネント
type NumberImageProps = {
  index: number;
  datas: number[];
  moves: number[];
  handleLink: (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
    index: number
  ) => void;
};
const NumberImage: FC<NumberImageProps> = ({
  index,
  datas,
  moves,
  handleLink,
}) => {
  const number = datas[index].toString();
  const imagePath = "/gif/" + number + ".gif";
  // 動かせるセルにはリンクを張る
  if (moves.includes(index)) {
    // イベントハンドラに値を渡す場合は少々厄介らしい
    return (
      <img src={imagePath} alt={number} onClick={(e) => handleLink(e, index)} />
    );
  }
  return <img src={imagePath} alt={number} />;
};

export default NumberImage;
