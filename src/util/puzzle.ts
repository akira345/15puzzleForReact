//パズルクラス

class Puzzle {
  // プロパティ
  private _sideSize: number;
  private _totalCount: number;
  private _answerDatas: number[];
  private _gameDatas: number[];
  private _moves: number[];
  private _shuffleCount: number;
  private _emptyCellNo: number;
  private _difficult: string; // ここは列挙型にしたほうが良い気がする・・
  // Getter/Setter
  /**
   * 難易度
   */
  get difficult(): string {
    return this._difficult;
  }
  /**
   * 難易度
   */
  set difficult(value: string) {
    this._difficult = value;
  }
  /**
   * 正解データ配列
   */
  get answerDatas(): number[] {
    return this._answerDatas;
  }
  /**
   * 問題データ配列
   */
  get gameDatas(): number[] {
    return this._gameDatas;
  }
  /**
   * ゲーム盤の一辺のセル数
   */
  get sideSize(): number {
    return this._sideSize;
  }
  /**
   * 動かせるセルの位置
   */
  get moves(): number[] {
    return this._moves;
  }
  /**
   *
   * @param {Number} cellCount ゲーム盤のセル個数
   */
  constructor(cellCount: number) {
    this._sideSize = Math.sqrt(cellCount);
    this._totalCount = this._sideSize * this._sideSize;
    this._answerDatas = [];
    this._gameDatas = [];
    this._moves = [];
    this._shuffleCount = 0;
    this._emptyCellNo = this._totalCount;
    this._difficult = "Normal";
    // 初期データセット
    this.generateAnswerDatas();
    this._gameDatas = JSON.parse(JSON.stringify(this._answerDatas));
  }
  /**
   * 難易度に応じシャッフルする回数を決定します
   */
  private setShuffleCount() {
    switch (this._difficult) {
      case "Easy":
        this._shuffleCount = this._totalCount * 3;
        break;
      case "Normal":
        this._shuffleCount = this._totalCount * 6;
        break;
      case "Hard":
        this._shuffleCount = this._totalCount * 10;
        break;
      default:
        this._shuffleCount = this._totalCount;
    }
  }
  /**
   * 正解データを作成します。
   * 正解データは[0,1,2,3,…]な感じです(ただし０は使わない)
   */
  private generateAnswerDatas() {
    this._answerDatas = [];
    for (let i = 0; i <= this._totalCount; ++i) {
      this._answerDatas.push(i);
    }
  }
  /**
   * 問題データを作成します。
   */
  public generateGameDatas() {
    this.setShuffleCount();
    for (let i = 0; i < this._shuffleCount; ++i) {
      this.randomMove();
    }
    //偶然戻ることがあるのでチェック
    if (this.isComplete()) {
      this.randomMove();
    }
  }
  /**
   * 正解したか判定します。
   */
  public isComplete() {
    // javaScriptには配列の比較演算子が無いらしいので、文字列に変換して比較するらしい
    if (this._answerDatas.toString() === this._gameDatas.toString()) {
      this._moves = [];
      return true;
    }
    return false;
  }
  /**
   * 動かせるセルを特定します
   */
  public setMove() {
    this._moves[0] = this._emptyCellNo - 1; // 空白から左のセル
    this._moves[1] = this._emptyCellNo + 1; // 空白から右のセル
    this._moves[2] = this._emptyCellNo + this._sideSize; // 空白から下のセル
    this._moves[3] = this._emptyCellNo - this._sideSize; // 空白から上のセル
    // 枠外にはみ出たものはゼロにする
    const tmp = this._emptyCellNo % this._sideSize;
    if (this._moves[3] < 0) this._moves[3] = 0;
    if (this._moves[2] > this._totalCount) this._moves[2] = 0;
    if (tmp === 0) this._moves[1] = 0;
    if (tmp === 1) this._moves[0] = 0;
  }
  /**
   * セルをランダムに動かします。
   */
  private randomMove() {
    this.setMove();
    while (true) {
      // 0~3の乱数生成
      const tmp = Math.floor(Math.random() * 4);
      if (this._moves[tmp] !== 0) {
        this.swapEmptyCell(this._moves[tmp]);
        break;
      }
    }
  }
  /**
   * セルを動かします
   * @param {Number} moveCellNo 動かすセルの番号
   */
  public move(moveCellNo: number) {
    // 完成していたら動かせない
    if (this.isComplete()) {
      return;
    }
    moveCellNo = Math.floor(moveCellNo);
    // 値チェック
    if (moveCellNo >= 1 && moveCellNo <= this._totalCount) {
      this.setMove();
      // 4つの動かせるセルのどれかを選択されたか？
      if (this._moves.includes(moveCellNo)) {
        this.swapEmptyCell(moveCellNo);
      }
    }
  }
  /**
   * 空白セルを入れ替えます
   * @param {*} moveCellNo 動かすセルの番号
   */
  private swapEmptyCell(moveCellNo: number) {
    const tmp = this._gameDatas[moveCellNo];
    this._gameDatas[moveCellNo] = this._gameDatas[this._emptyCellNo];
    this._gameDatas[this._emptyCellNo] = tmp;
    this._emptyCellNo = moveCellNo;
  }
}

export default Puzzle;
