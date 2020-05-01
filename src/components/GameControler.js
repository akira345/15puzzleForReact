import React, { useState } from 'react';

// ゲームコントローラコンポーネント
const GameController = ( props ) => {
  // コントローラ表示
  const Controller = ( isComplate ) => {
    // ラジオボタンのチェックボックスを変更できるようにする
    // こうしないとReactではイベントをトラップされているので変更できなくなる
    const [ difficult, setDifficult ] = useState( 'Normal' );
    const handleOnChange = ( event ) => {
      setDifficult( event.target.value );
    };
    if ( isComplate ) {
      return (
        <>
          <input type="radio" name="difficult" value="Easy" onChange={ handleOnChange } checked={ difficult === 'Easy' } />やさしい
          <input type="radio" name="difficult" value="Normal" onChange={ handleOnChange } checked={ difficult === 'Normal' } /> 普通
          <input type="radio" name="difficult" value="Hard" onChange={ handleOnChange } checked={ difficult === 'Hard' } /> 難しい
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

  return (
    <form onSubmit={ props.handleSubmit }>
      <Controller
        state={ props.state }
      />
    </form>
  );
};

export default GameController;