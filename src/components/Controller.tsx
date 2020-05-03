import React, { useState, FC } from "react";

type ControllerProps = {
  difficult: string;
  isComplate: boolean;
};
// コントローラ表示
const Controller: FC<ControllerProps> = ({ difficult, isComplate }) => {
  // ラジオボタンのチェックボックスを変更できるようにする
  // こうしないとReactではイベントをトラップされているので変更できなくなる
  const [_difficult, setDifficult] = useState(difficult);
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDifficult(event.target.value);
  };

  if (isComplate) {
    return (
      <>
        <input
          type="radio"
          name="difficult"
          value="Easy"
          onChange={handleOnChange}
          checked={_difficult === "Easy"}
        />
        やさしい
        <input
          type="radio"
          name="difficult"
          value="Normal"
          onChange={handleOnChange}
          checked={_difficult === "Normal"}
        />{" "}
        普通
        <input
          type="radio"
          name="difficult"
          value="Hard"
          onChange={handleOnChange}
          checked={_difficult === "Hard"}
        />{" "}
        難しい
        <br />
        <input type="submit" name="submit" value="スタート" />
      </>
    );
  } else {
    return (
      <>
        <input type="submit" name="submit" value="ギブアップ" />
      </>
    );
  }
};

export default Controller;
