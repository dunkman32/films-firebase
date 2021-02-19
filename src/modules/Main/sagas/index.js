import {call, all, put, takeLatest} from 'redux-saga/effects'
import {actions, constants} from '../index'
import {getFilms, addFilm} from '../../../adapters/main'

export function* getList() {
    try {
        const querySnapshot = yield call(getFilms)
        const data = []
        querySnapshot.forEach((snapshot) => {
            data.push(snapshot.data())
        })
        yield put(actions.get.success({
            data
        }))
    } catch (e) {
        const {response, message} = e
        yield put(actions.get.failure(response, message))
    }
}

export function* addElement(action) {
    const {data} = action.payload
    try {
        yield call(addFilm, data)
        yield all([
            put(actions.add.success()),
            put(actions.get.request()),
        ])
    } catch (e) {
        const {response, message} = e
        yield put(actions.add.failure(response, message))
    }
}

export default function* () {
    yield takeLatest(constants.LIST_REQUESTED, getList)
    yield takeLatest(constants.ADD_REQUESTED, addElement)
}
