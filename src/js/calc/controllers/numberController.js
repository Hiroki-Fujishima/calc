import { takeEvery, fork } from "redux-saga/effects";
import { PUSH_NUMBER_BUTTON_REQUEST } from "../../const/actionTypes";
import numberService from "../services/numberService";

function* calc(action) {
  yield fork(numberService.run, action);
}

export default function* () {
  yield takeEvery(PUSH_NUMBER_BUTTON_REQUEST, calc);
}
