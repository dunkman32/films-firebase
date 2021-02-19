import { combineReducers } from 'redux'
import { helpers as storeHelpers } from '@affix/redux-store'
import { getRequireContextModules } from '@src/helpers'

const releaseBasedReducers = storeHelpers
  .getAllModuleReducers(getRequireContextModules())

export default combineReducers({
  ...releaseBasedReducers
})
