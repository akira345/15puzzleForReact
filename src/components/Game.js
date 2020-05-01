import React from 'react';

const Game = () => {
  return (
    <div>
      <>
        普通
        完成
      </>
      <>
        <table border="0" >
          <tr>
            <td>
              <table border="1">
                <tr>
                  <td>
                    <img src="/gif/1.gif" alt="1" />
                  </td>
                  <td>
                    <img src="/gif/2.gif" alt="2" />
                  </td>
                  <td>
                    <img src="/gif/3.gif" alt="3" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="/gif/4.gif" alt="4" />
                  </td>
                  <td>
                    <img src="/gif/5.gif" alt="5" />
                  </td>
                  <td>
                    <img src="/gif/6.gif" alt="6" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="/gif/7.gif" alt="7" />
                  </td>
                  <td>
                    <img src="/gif/8.gif" alt="8" />
                  </td>
                  <td>
                    <img src="/gif/9.gif" alt="9" />
                  </td>
                </tr>
              </table>
            </td>
            <td>　</td>
            <td>
              <table border="1">
                <tr>
                  <td>
                    <img src="/gif/1.gif" alt="1" />
                  </td>
                  <td>
                    <img src="/gif/2.gif" alt="2" />
                  </td>
                  <td>
                    <img src="/gif/3.gif" alt="3" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="/gif/4.gif" />
                  </td>
                  <td>
                    <img src="/gif/5.gif" alt="5" />
                  </td>
                  <td>
                    <img src="/gif/6.gif" alt="6" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="/gif/7.gif" alt="7" />
                  </td>
                  <td>
                    <img src="/gif/8.gif" alt="8" />
                  </td>
                  <td>
                    <img src="/gif/9.gif" alt="9" />
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </>
      <>
        <form method="POST" action="/start/">
          <input type="radio" name="difficult" value="Easy" />やさしい
        <input type="radio" name="difficult" value="Normal" checked />普通
        <input type="radio" name="difficult" value="Hard" />難しい
        <br />
          <input type="submit" name="submit" value="スタート" />
        </form>
      </>
    </div>
  );
};

export default Game;