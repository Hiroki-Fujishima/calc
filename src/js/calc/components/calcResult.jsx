import React from "react";

class calcResult extends React.Component {
  render() {
    /**
     * 下記処理
     * this.propsから、num, operator, num2を取り出す
     */
    const { num, operator, num2 } = this.props;
    return (
      /**
       * 下記処理 ||
       * numがnull, undefined, 空白, 0のときは文字を表示
       */
      <div>
        {num || num === 0 ? num : "Please input value"}
        {operator}
        {num2 || null}
      </div>
    );
  }
}

export default calcResult;
