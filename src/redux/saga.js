import switchLang from './actions'
import {put, takeLeading} from 'redux-saga/effects'

function* rootSaga() {
    yield all([
        watchSaga(),
    ])
}

function* switchLangSaga(action) {
    try {

        yield put(switchLang(action.lang));
    } catch (e) {
        console.error(e)
    }
}

function* watchSaga() {
    yield takeLeading('SWITCH_LANGUAGE', switchLangSaga)
}

