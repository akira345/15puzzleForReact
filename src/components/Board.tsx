import React, { FC } from "react";
import NumberImage from "./NumberImage";

// ゲーム盤を表示するコンポーネント
// props.dataに盤の配列を入れる
// 最大の数字が空白セルになる事
// 例：props.datas=[0,1,2,3,4,5,6,7,8,9](ただしゼロは使わない)
type BoardProps = {
  datas: number[];
  sideSize: number;
  moves: number[];
  handleLink: (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
    index: number
  ) => void;
};
type CellProps = {
  datas: number[];
  moves: number[];
  handleLink: (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
    index: number
  ) => void;
  idx: number;
};
type BoardDataProps = {
  datas: number[];
  sideSize: number;
  moves: number[];
  handleLink: (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
    index: number
  ) => void;
};

const Cell: FC<CellProps> = ({ datas, idx, handleLink, moves }) => {
  return (
    // Reactではforで回すときはkeyを付けないといけないらしい。主キーになるそうなのでユニークにしておく
    <td
      style={{
        borderWidth: "1px",
        borderColor: "#000000",
        borderStyle: "solid",
      }}
      key={idx}
    >
      <NumberImage
        datas={datas}
        index={idx}
        handleLink={handleLink}
        moves={moves}
      />
    </td>
  );
};
const BoardData: FC<BoardDataProps> = ({
  datas,
  sideSize,
  moves,
  handleLink,
}) => {
  // Reactでは必ず閉じタグとペアでないとダメそうなので、安易に文字列組み立て出来ない・・
  const board = [];
  let idx = 1;
  for (let i = 0; i < sideSize; ++i) {
    const rowData = [];
    for (let j = 0; j < sideSize; ++j) {
      rowData.push(
        <Cell
          key={idx}
          datas={datas}
          idx={idx}
          handleLink={handleLink}
          moves={moves}
        />
      );
      ++idx;
    }
    // Reactではforで回すときはkeyを付けないといけないらしい
    board.push(<tr key={i}>{rowData}</tr>);
  }
  return <>{board}</>;
};

const Board: FC<BoardProps> = ({ datas, sideSize, moves, handleLink }) => {
  // 表示データ組み立て
  return (
    <table
      style={{
        borderWidth: "1px",
        borderColor: "#000000",
        borderStyle: "solid",
      }}
    >
      <tbody>
        <BoardData
          datas={datas}
          sideSize={sideSize}
          moves={moves}
          handleLink={handleLink}
        />
      </tbody>
    </table>
  );
};

export default Board;
