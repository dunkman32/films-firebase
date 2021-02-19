import { call, all, put, takeLatest } from 'redux-saga/effects'
import { find } from 'lodash'
import { actions, constants } from '@src/modules/BanList'
import { api } from '@src/services'
import { actions as loadingActions } from '@src/modules/Loading'
import { imageUrlCreator } from '@src/helpers'

export function * getBanList (action) {
  const data = action.payload.data
  yield put(loadingActions.open())
  try {
    const response = yield call(api.gateway.getBanList, data)
    const ids = response.data.coolDowns.map((o) => o.playerId)
    if (ids?.length) {
      const { data: idsWithUsernames } = yield call(api.gateway.takeUsernames, ids.filter(Boolean).join(','))
      const infoArray = response.data.coolDowns.map((el) => {
        const found = find(idsWithUsernames, ['id', el.playerId])
        const username = found ? found.username : 'undefined'

        return {
          ...el,
          username: username,
          avatar: `${imageUrlCreator(username)}/avatar.JPEG`
        }
      })
      yield put(actions.getBanList.success({
        ...response,
        data: {
          count: response.data.count,
          coolDowns: infoArray
        }
      }))
    } else {
      yield put(actions.getBanList.success(
        {
          ...response,
          data: {
            count: 0,
            coolDowns: []
          }
        }
      ))
    }
  } catch (e) {
    const { response, message } = e
    yield put(actions.getBanList.failure(response, message))
  } finally {
    yield put(loadingActions.close())
  }
}

function * removeBan (action) {
  yield put(loadingActions.open())
  const { id, ban } = action.payload
  try {
    const response = yield call(api.gateway.removeBan, id, ban)
    yield all([
      put(actions.removeBan.success(response)),
      put(actions.getBanList.remove(ban))
    ])
  } catch (e) {
    const { response, message } = e
    yield put(actions.removeBan.failure(response, message))
  } finally {
    yield put(loadingActions.close())
  }
}

export default function * () {
  yield takeLatest(constants.BAN_LIST_REQUESTED, getBanList)
  yield takeLatest(
    constants.REMOVE_BAN_REQUESTED,
    removeBan
  )
}
