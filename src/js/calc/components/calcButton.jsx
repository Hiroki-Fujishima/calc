import React from "react";
import { CALC_PARAM } from "../../const/calcParam";

class calcButton extends React.Component {
  render() {
    if (this.props.param === CALC_PARAM.PLUS) {
      return (
        <button onClick={() => this.props.plus(this.props.param)}>
          {this.props.param}
        </button>
      );
    }
    if (this.props.param === CALC_PARAM.MINUS) {
      return (
        <button onClick={() => this.props.minus(this.props.param)}>
          {this.props.param}
        </button>
      );
    }
    if (this.props.param === CALC_PARAM.MULTIPLY) {
      return (
        <button onClick={() => this.props.multiply(this.props.param)}>
          {this.props.param}
        </button>
      );
    }
    if (this.props.param === CALC_PARAM.EQUAL) {
      return (
        <button onClick={() => this.props.equal()}>
          {this.props.param}
        </button>
      );
    }
    if (this.props.param === CALC_PARAM.CLEAR) {
      return (
        <button onClick={() => this.props.clear()}>
          {this.props.param}
        </button>
      );
    }
    return (
      <button onClick={() => this.props.divide(this.props.param)}>
        {this.props.param}
      </button>
    );
  }
}

export default calcButton;
