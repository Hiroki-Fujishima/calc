import {
  PUSH_PLUS_BUTTON_REQUEST,
  PUSH_NUMBER_BUTTON_SUCCESS,
  PUSH_MULTIPLY_BUTTON_REQUEST,
  PUSH_MINUS_BUTTON_REQUEST,
  PUSH_DIVIDE_BUTTON_REQUEST,
  PUSH_EQUAL_SUCCESS,
  PUSH_CLEAR_BUTTON_SUCCESS,
} from "../../const/actionTypes";
import { CALC_PARAM } from "../../const/calcParam";

const initialState = {
  /**
   * 左辺
   */
  num: '',
  /**
   * 右辺
   */
  num2: 0,
  /**
   * 四則演算文字列
   * CALC_PARAMのいずれかが入る
   */
  operator: "",
  /**
   * 計算結果表示中 → true
   * 計算途中 → false
   */
  showingResult: false,
  /**
   * よくわからない
   */
  calculate: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case PUSH_NUMBER_BUTTON_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };

    case PUSH_PLUS_BUTTON_REQUEST:
      return {
        ...state,
        operator: CALC_PARAM.PLUS,
      };
    case PUSH_MINUS_BUTTON_REQUEST:
      return {
        ...state,
        operator: CALC_PARAM.MINUS,
      };
    case PUSH_MULTIPLY_BUTTON_REQUEST:
      return {
        ...state,
        operator: CALC_PARAM.MULTIPLY,
      };
    case PUSH_DIVIDE_BUTTON_REQUEST:
      return {
        ...state,
        operator: CALC_PARAM.DIVIDE,
      };
      case PUSH_CLEAR_BUTTON_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case PUSH_EQUAL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
      
    default:
      return state;
  }
}
