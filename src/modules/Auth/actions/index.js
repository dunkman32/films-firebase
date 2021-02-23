import {constants} from '../index'
import {getAction as action} from '../../../helpers'

export const user = ({
    add: (user) => {
        return action(constants.ADD, {user})
    },
    remove: () => action(constants.REMOVE),
})

