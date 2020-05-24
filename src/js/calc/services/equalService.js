import { put, select } from "redux-saga/effects";
import * as TYPES from "../../const/actionTypes";
import { CALC_PARAM } from "../../const/calcParam";

function toResultCalc(num, num2, operator) {
  if(operator === CALC_PARAM.PLUS) {
    return num + num2;
  } if(operator === CALC_PARAM.MINUS) {
    return num - num2;
  } if(operator === CALC_PARAM.MULTIPLY) {
    return num * num2;
  } if(operator === CALC_PARAM.DIVIDE) {
    return num / num2;
  } return num;
}


function* run() {
  /**
   * ここは計算をするところ
   */
  const status = yield select(state => state.calc);
  /**
   * 計算に必要な素材をModel(state)から取得します
   */
  const {
    num, num2, operator,
  } = status;
  const result = toResultCalc(num, num2, operator);
  yield put({
    type: TYPES.PUSH_EQUAL_SUCCESS,
    payload: {
      num: result,
      num2: 0,
      operator: '',
    }
  })
}

export default { run };
