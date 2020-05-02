import React from 'react';
import Controller from './Controller';

// ゲームコントローラコンポーネント
const GameController = ( props ) => {
  return (
    <form onSubmit={ props.handleSubmit }>
      <Controller
        difficult={ props.difficult }
        isComplate={ props.isComplate }
      />
    </form>
  );
};

export default GameController;