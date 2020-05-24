import { connect } from "react-redux";
import { plus, minus, multiply, divide, clear, } from "../modules/calcAction";
import calcResult from "../components/calcResult";

function mapStateToProps(state) {
  return {
    num: state.calc.num,
    num2: state.calc.num2,
    operator: state.calc.operator,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    plus: () => dispatch(plus()),
    minus: () => dispatch(minus()),
    multiply: () => dispatch(multiply()),
    divide: () => dispatch(divide()),
    clear: () => dispatch(clear()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(calcResult);
