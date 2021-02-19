import { store as baseStore } from '@affix/redux-store'
import rootReducer from '@src/store/reducers'
import sagas from '@src/store/sagas'

export const { store, persistor } = baseStore(rootReducer, sagas, {
  reduxDevTools: process.env.REDUX_DEVTOOLS
})
