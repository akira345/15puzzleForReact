import React from 'react';

// ゲームコントローラコンポーネント
const GameController = () => {
  return (
    <form method="POST" action="/start/">
      <input type="radio" name="difficult" value="Easy" />やさしい
      <input type="radio" name="difficult" value="Normal" checked />普通
      <input type="radio" name="difficult" value="Hard" />難しい
      <br />
      <input type="submit" name="submit" value="スタート" />
    </form>
  );
};

export default GameController;