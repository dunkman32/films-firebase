// @flow

import { withStatusFailed, withStatusInitial, withStatusRequested, withStatusSucceeded } from '@affix/front-reducer'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { constants, selectors } from '@src/modules/BanList'
import { type ListReducer } from '@src/modules/BanList/types'
import getProp from '@src/helpers/getProp'
import { type Reducer as BaseReducer } from '@src/types/reducer'
import { imageUrlCreator } from '@src/helpers'

export type Reducer = BaseReducer<ListReducer>

export const initialState: Reducer = withStatusInitial<ListReducer>({
  statusCode: 0,
  error: {
    message: ''
  },
  data: {
    coolDowns: [],
    count: 0
  }
})

const reducer =
  (state: Reducer = initialState,
    action: FixMeAny): Reducer => {
    switch (action.type) {
      case constants.BAN_LIST_REQUESTED:
        return withStatusRequested<ListReducer>(initialState)
      case constants.BAN_LIST_SUCCEEDED:
        return withStatusSucceeded<ListReducer>({
          ...state,
          statusCode: getProp(() => action.payload.response.status, 0),
          data: {
            ...state.data,
            count: getProp(() => action.payload.response?.data.count, 0),
            coolDowns: getProp(() => action.payload.response
              ?.data.coolDowns, [])
              .map((o) => ({
                removed: false,
                to: getProp(() => o.to, ''),
                id: getProp(() => o.id, -1),
                from: getProp(() => o.from, ''),
                avatar: getProp(() => o.avatar, ''),
                reason: getProp(() => o.reason, ''),
                matchId: getProp(() => o.matchId, -1),
                username: getProp(() => o.username, ''),
                user: getProp(() => ({
                  id: getProp(() => o.user.userId, 0),
                  email: getProp(() => o.user.emailAddress, ''),
                  country: getProp(() => o.user.country, ''),
                  username: getProp(() => o.user.userName, ''),
                  avatar: getProp(() => `${imageUrlCreator(o.user.userId)}/avatar.JPEG`, '')
                }), {
                  id: 0,
                  email: '',
                  country: '',
                  username: '',
                  avatar: ''
                })
              }))
          }
        })
      case constants.BAN_LIST_FAILED:
        return withStatusFailed<ListReducer>({
          ...initialState,
          statusCode: getProp(() => action.payload.response.status, 0),
          error: {
            message: getProp(() => action.payload.message, '')
          }
        })
      case constants.BAN_LIST_REMOVE:
        return {
          ...state,
          data: {
            ...state.data,
            coolDowns: selectors
              .removeOneFromBan(state.data.coolDowns, action.payload.id),
            count: state.data.count
          }
        }
      default:
        return state
    }
  }
const conf = {
  key: 'cool.down.list',
  storage
}

const persistentReducer: FixMeAny = persistReducer(conf, reducer)

export default persistentReducer
