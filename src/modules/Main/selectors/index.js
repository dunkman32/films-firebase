// @flow

import { createSelector } from 'reselect'
import { moduleName } from '@src/modules/BanList'
import { type State as CreateState } from '@src/types/reducer'
import { type Reducers } from '@src/modules/BanList/reducers'
import { type Ban } from '@src/modules/BanList/types'

type State = CreateState<Reducers>

export const selectBanList = createSelector<*, *, *, State>(
  (state) => state[moduleName],
  (data) => data.list
)
export const selectBanListData = createSelector<*, *, *, State>(
  (state) => state[moduleName],
  (data) => data.list.data
)

export const removeOneFromBan =
  (list: $ReadOnlyArray<Ban>, id: number): $ReadOnlyArray<Ban> =>
    list.map((o) => {
      if (o.id === id) {
        return {
          ...o,
          removed: true
        }
      } else {
        return o
      }
    })

export const selectBanRemove = createSelector<*, *, *, State>(
  (state) => state[moduleName],
  (data) => data.remove
)
