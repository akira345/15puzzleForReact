import React, { FC } from "react";
import Controller from "./Controller";

// ゲームコントローラコンポーネント
type GameControllerProps = {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void | undefined;
  difficult: string;
  isComplate: boolean;
  onDifficultChange: (difficult: string) => void;
};

const GameController: FC<GameControllerProps> = ({
  handleSubmit,
  difficult,
  isComplate,
  onDifficultChange,
}) => {
  return (
    <form onSubmit={handleSubmit} data-testid="control-form">
      <Controller
        difficult={difficult}
        isComplate={isComplate}
        onChange={onDifficultChange}
      />
    </form>
  );
};

export default GameController;
