import { put, select } from "redux-saga/effects";
import * as TYPES from "../../const/actionTypes";

function* run(action) {
  const num = action.payload;
  const status = yield select((state) => state);
  /**
   * 下の処理
   * status.calcオブジェクトから、numを取り出す
   * 取り出したnumは、prevNumとして変数名を付与する
   */
  const { num: prevNum, num2: prevNum2, operator } = status.calc;
  /**
   * 下の処理
   * 三項演算子
   * もし、operatorが空白のとき、変数calcNumにはprevNumを格納する
   * もし、operatorが空白でないとき、変数calcNumにはprevNum2を格納する
   */
  let calcNum = operator === "" ? prevNum : prevNum2;
  const nextNum = (calcNum + String(num)) * 1;
  /**
   * これからしたいこと
   * operatorが空白のとき、
   * ・保存先をnumに
   * operatorが空白でないとき、
   * ・保存先をnum2に
   */
  if (operator === "") {
    yield put({
      type: TYPES.PUSH_NUMBER_BUTTON_SUCCESS,
      payload: {
        num: nextNum,
      },
    });
  } else {
    yield put({
      type: TYPES.PUSH_NUMBER_BUTTON_SUCCESS,
      payload: {
        num2: nextNum,
      },
    });
  }
}

export default { run };
