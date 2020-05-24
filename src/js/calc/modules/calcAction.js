import {
  PUSH_PLUS_BUTTON_REQUEST,
  PUSH_NUMBER_BUTTON_REQUEST,
  PUSH_MINUS_BUTTON_REQUEST,
  PUSH_MULTIPLY_BUTTON_REQUEST,
  PUSH_DIVIDE_BUTTON_REQUEST,
  PUSH_EQUAL_REQUEST,
  PUSH_CLEAR_BUTTON_REQUEST,
} from "../../const/actionTypes";

/** from
 * Actionは、ユーザーが起こすイベントを定義します
 */

export function putNumber(num) {
  return { type: PUSH_NUMBER_BUTTON_REQUEST, payload: num };
}
export function plus() {
  return { type: PUSH_PLUS_BUTTON_REQUEST };
}
export function minus() {
  return { type: PUSH_MINUS_BUTTON_REQUEST };
}
export function multiply() {
  return { type: PUSH_MULTIPLY_BUTTON_REQUEST };
}
export function divide() {
  return { type: PUSH_DIVIDE_BUTTON_REQUEST };
}
export function equal() {
  return { type: PUSH_EQUAL_REQUEST };
}
export function clear() {
  return { type: PUSH_CLEAR_BUTTON_REQUEST };
}
