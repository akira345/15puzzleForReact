import React from 'react';
// ゲーム進行状況ステータス表示コンポーネント

const ShowStatus = ( props ) => {
  const state = ( isComplate ) => {
    console.log( isComplate );
    if ( isComplate ) return '完成';
    return '未完成';
  };
  return (
    <>
      { state( props.isComplate ) }
    </>
  );
};
export default ShowStatus;