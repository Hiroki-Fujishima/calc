import { connect } from "react-redux";
import { putNumber } from "../modules/calcAction";
import numberButton from "../components/numberButton";

function mapStateToProps() {
  return {};
}
function mapDispatchToProps(dispatch) {
  return {
    putNumber: (num) => dispatch(putNumber(num)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(numberButton);
