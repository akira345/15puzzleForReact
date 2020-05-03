import React, { FC } from "react";

// ゲーム進行状況ステータス表示コンポーネント
type ShowStatusProps = {
  isComplate: boolean;
};
const ShowStatus: FC<ShowStatusProps> = ({ isComplate }) => {
  const state = (isComplate: boolean) => {
    if (isComplate) return "完成";
    return "未完成";
  };
  return <>{state(isComplate)}</>;
};
export default ShowStatus;
