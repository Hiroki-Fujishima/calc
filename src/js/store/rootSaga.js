import { all } from 'redux-saga/effects';
import calcController from '../calc/controllers/calcController';

export default function* routeSaga() {
   yield all([calcController()]);
}