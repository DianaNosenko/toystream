import { put, takeLatest } from 'redux-saga/effects';
import i18n from '../../translations/config-i18next';
import { SET_LANG} from '../constants';
import {setLangSuccess, setLangFailure } from '../actions/actionCreator';


function* setLangSaga(action) {
  try {
    yield i18n.changeLanguage(action.lang);
    yield put(setLangSuccess(action.lang));
  } catch (e) {
    yield put(setLangFailure(e));
  }
}

function* watcherSaga() {
  yield takeLatest(SET_LANG, setLangSaga);
}

export default function* rootSaga() {
  yield watcherSaga();
}
