import { put, select } from "redux-saga/effects";
import * as TYPES from "../../const/actionTypes";

function* run(action) {
  console.log("----------------------- in -action");
  console.log(action);

  const status = yield select((state) => state);
  const num = status.calc.num;
  const nextNum = num * 1;

  if (nextNum < 100) {
    yield put({
      type: TYPES.PUSH_PLUS_BUTTON_SUCCESS,
      payload: nextNum,
    });
  }
}

export default { run };
