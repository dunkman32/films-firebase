import { constants } from '@src/modules/BanList'
import { getAction as action } from '@src/helpers'

export const getBanList = ({
  request: (data) =>
    action(constants.BAN_LIST_REQUESTED, { data }),
  success: (response) =>
    action(constants.BAN_LIST_SUCCEEDED, { response }),
  failure: (response, message) =>
    action(constants.BAN_LIST_FAILED, {
      response,
      message
    }),
  remove: (id) =>
    action(constants.BAN_LIST_REMOVE, { id })
})
export const removeBan = ({
  request: (id, ban) =>
    action(constants.REMOVE_BAN_REQUESTED, {
      id,
      ban
    }),
  success: (response) =>
    action(constants.REMOVE_BAN_SUCCEED, {
      response
    }),
  failure: (response, message) =>
    action(constants.REMOVE_BAN_FAILED, {
      response,
      message
    })
})
