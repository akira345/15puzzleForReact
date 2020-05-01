//パズルクラス

class Puzzle {

  /**
   * 
   * @param {Number} cellCount ゲーム盤のセル個数
   */
  constructor ( cellCount ) {
    this.sideSize = Math.sqrt( cellCount );
    this.totalCount = this.sideSize * this.sideSize;
    this.answerDatas = [];
    this.gameDatas = [];
    this.moves = [];
    this.shuffleCount = 0;
    this.emptyNo = this.totalCount;
    this.difficult = 'Normal';
    // 初期データセット
    this.generateAnswerDatas();
    this.gameDatas = JSON.parse( JSON.stringify( this.answerDatas ) );
  }
  /**
   * 難易度に応じシャッフルする回数を決定します
   */
  setShuffleCount () {
    switch ( this.difficult ) {
      case 'Easy':
        this.shuffleCount = this.totalCount * 3;
        break;
      case 'Normal':
        this.shuffleCount = this.totalCount * 6;
        break;
      case 'Hard':
        this.shuffleCount = this.totalCount * 10;
        break;
      default:
        this.shuffleCount = this.totalCount;
    }
  };
  /**
   * 正解データを作成します。
   * 正解データは[1,2,3,…]な感じです
   */
  generateAnswerDatas () {
    for ( let i = 0; i < this.totalCount; ++i ) {
      this.answerDatas.push( i + 1 );
    }
  }
  /**
   * 問題データを作成します。
   */
  generateGameDatas () {
    this.GameDatas = this.answerDatas.clone();
    this.setShuffleCount();
    for ( let i = 0; i < this.shuffleCount; ++i ) {
      this.randomMove();
    }
    //偶然戻ることがあるのでチェック
    if ( this.isComplete ) {
      this.randomMove();
    }
  }
  /**
   * 正解したか判定します。
   */
  isComplete () {
    if ( this.answerDatas === this.gameDatas ) {
      return true;
    }
    return false;
  }
  /**
   * 動かせるセルを特定します
   */
  setMove () {
    this.moves[ 0 ] = this.emptyNo - 1;              // 空白から右のセル
    this.moves[ 1 ] = this.emptyNo + 1;              // 空白から左のセル
    this.moves[ 2 ] = this.emptyNo + this.sideSize;  // 空白から下のセル
    this.moves[ 3 ] = this.emptyNo - this.sideSize;  // 空白から上のセル
    // 枠外にはみ出たものはゼロにする
    const tmp = this.emptyNo % this.sideSize;
    if ( this.moves[ 3 ] < 0 ) this.moves[ 4 ] = 0;
    if ( this.moves[ 2 ] > this.totalCount ) this.moves[ 3 ] = 0;
    if ( tmp === 0 ) this.moves[ 1 ] = 0;
    if ( tmp === 1 ) this.moves[ 0 ] = 0;
  }
  /**
   * セルをランダムに動かします。
   */
  randomMove () {
    this.setMove();
    while ( true ) {
      // 1~4の乱数生成
      const tmp = Math.floor( Math.random() * ( 4 ) ) + 1;
      if ( this.moves[ tmp ] !== 0 ) {
        this.swapEmptyCell( this.moves[ tmp ] );
        break;
      }
    }
  }
  /**
   * セルを動かします
   * @param {Number} moveCellNo 動かすセルの番号
   */
  move ( moveCellNo ) {
    // 完成していたら動かせない
    if ( this.isComplete ) {
      return;
    }
    moveCellNo = Math.floor( moveCellNo );
    // 値チェック
    if ( moveCellNo >= 1 && moveCellNo <= this.totalCount ) {
      this.setMove();
      // 4つの動かせるセルのどれかを選択されたか？
      for ( let i = 0; i < 4; ++i ) {
        if ( this.moves[ i ] === moveCellNo ) {
          this.swapEmptyCell( moveCellNo );
        }
      }
    }
  }
  /**
   * 空白セルを入れ替えます
   * @param {*} moveCellNo 動かすセルの番号
   */
  swapEmptyCell ( moveCellNo ) {
    const tmp = this.gameDatas[ moveCellNo ];
    this.gameDatas[ moveCellNo ] = this.gameDatas[ this.emptyNo ];
    this.gameDatas[ this.emptyNo ] = tmp;
    this.emptyNo = moveCellNo;
  }
}

export default Puzzle;