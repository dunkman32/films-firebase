// @flow

import { combineReducers } from 'redux'
import list from '@src/modules/BanList/reducers/list'
import remove from '@src/modules/BanList/reducers/remove'

const reducers = {
  list,
  remove
}

const rootReducer = combineReducers<*, *>(reducers)
export type Reducers = typeof reducers
export default rootReducer
