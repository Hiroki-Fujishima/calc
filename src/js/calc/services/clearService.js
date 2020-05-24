import { put } from "redux-saga/effects";
import * as TYPES from "../../const/actionTypes";

function* run() {
  yield put({
    type: TYPES.PUSH_CLEAR_BUTTON_SUCCESS,
    payload: {
      num: "",
      num2: 0,
      operator: "",
    },
  });
}

export default { run };
