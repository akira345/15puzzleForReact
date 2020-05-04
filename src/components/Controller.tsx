import React, { FC } from "react";

type ControllerProps = {
  difficult: string;
  isComplate: boolean;
  onChange: (difficult: string) => void;
};
// コントローラ表示
const Controller: FC<ControllerProps> = ({ difficult, isComplate , onChange}) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  if (isComplate) {
    return (
      <>
        <input
          type="radio"
          name="difficult"
          value="Easy"
          onChange={handleOnChange}
          checked={difficult === "Easy"}
        />
        やさしい
        <input
          type="radio"
          name="difficult"
          value="Normal"
          onChange={handleOnChange}
          checked={difficult === "Normal"}
        />
        普通
        <input
          type="radio"
          name="difficult"
          value="Hard"
          onChange={handleOnChange}
          checked={difficult === "Hard"}
        />
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
