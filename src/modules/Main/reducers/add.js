import storage from 'redux-persist/lib/storage'
import {persistReducer} from 'redux-persist'
import {constants, selectors} from '../index'
import {getProp} from '../../../helpers'


export const initialState = {
    statuses: {
        isStarted: false,
        isPending: false,
        isFinished: false,
        isFailed: false,
        isSucceed: false
    },
    error: {
        message: ''
    },
    data: []
}

const reducer =
    (state = initialState, action) => {
        switch (action.type) {
            case constants.LIST_REQUESTED:
                return {
                    ...initialState,
                    statuses: {
                        ...state.statuses,
                        isStarted: true,
                        isPending: true,
                    },
                }
            case constants.LIST_SUCCEEDED:
                return {
                    ...state,
                    statuses: {
                        isStarted: false,
                        isPending: false,
                        isFinished: true,
                        isFailed: false,
                        isSucceed: true
                    },
                    data: getProp(() => action.payload.response.data, [])
                }
            case constants.LIST_FAILED:
                return {
                    ...initialState,
                    statuses: {
                        isStarted: false,
                        isPending: false,
                        isFinished: true,
                        isFailed: true,
                        isSucceed: false
                    },
                    error: {
                        message: getProp(() => action.payload.message, '')
                    }
                }

            default:
                return state
        }
    }
const conf = {
    key: 'main',
    storage
}

const persistentReducer = persistReducer(conf, reducer)

export default persistentReducer
