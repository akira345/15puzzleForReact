import React from 'react';

// レベル表示コンポーネント
const ShowLevel = ( props ) => {
  const level = ( difficult ) => {
    switch ( difficult ) {
      case 'Easy':
        return ( 'やさしい' );
      case 'Normal':
        return ( '普通' );
      case 'Hard':
        return ( '難しい' );
      default:
        return;
    }
  };
  return (
    <>
      { level( props.difficult ) }
    </>
  );

};
export default ShowLevel;