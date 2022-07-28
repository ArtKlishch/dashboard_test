import { combineReducers, createReducer } from '@reduxjs/toolkit'
import {
  setGlobalParameters,
  setUser,
  setUserInfo,
  setLabels,
  setWorklogs,
  deleteWorklogs,
  changeUserInfo,
  changeWorklogs,
  addWorklog
} from './actions'

const initState = {
  globalParameters: null,
  userInfo: null,
  user: null,
  labels: null,
  worklogs: null,
}

const globalParametersReducer = createReducer(initState.globalParameters, {
  [setGlobalParameters]: (_, { payload }) => payload
})

const userReducer = createReducer(initState.user, {
  [setUser]: (_, {payload}) => payload
})

const userInfoReducer = createReducer(initState.userInfo, {
  [setUserInfo]: (_, { payload }) => payload,
  [changeUserInfo]: (state, {payload}) => ({...state, [payload.path]: payload.value})
})

const labelsReducer = createReducer(initState.labels, {
  [setLabels]: (_, {payload}) => payload
})


const worklogsReducer = createReducer(initState.worklogs, {
  [setWorklogs]: (_, { payload }) => payload,
  [deleteWorklogs]: (state, { payload }) =>
    state.filter((item) => item.id !== payload.id),
  [changeWorklogs]: (state, { payload }) =>
    state.reduce((acc, item) => {
      if (item.id === payload.id) {
        return [...acc, { ...item, [payload.path]: payload.value }]
      }

      return [...acc, item]
    }, []),
  [addWorklog]: (state, { payload }) => [...state, payload]
})

const reducer = combineReducers({
  globalParameters: globalParametersReducer,
  user: userReducer,
  userInfo: userInfoReducer,
  labels: labelsReducer,
  worklogs: worklogsReducer,
})

export default reducer
