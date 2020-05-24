import { connect } from 'react-redux';
import { plus, minus, multiply, divide, equal, clear, } from '../modules/calcAction';
import calcButton from '../components/calcButton';

function mapStateToProps() {
  return {};
}
function mapDispatchToProps(dispatch) {
  return {
    plus: () => dispatch(plus()),
    minus: () => dispatch(minus()),
    multiply: () => dispatch(multiply()),
    divide: () => dispatch(divide()),
    equal: () => dispatch(equal()),
    clear: () => dispatch(clear()),

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(calcButton);