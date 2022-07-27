import { combineReducers, createReducer } from '@reduxjs/toolkit'
import { setGlobalParameters, setUser, setUserInfo } from './actions'

const initState = {
  globalParameters: {},
  userInfo: null,
  user: null,
}

const globalParametersReducer = createReducer(initState.globalParameters, {
  [setGlobalParameters]: (_, { payload }) => payload
})

const userReducer = createReducer(initState.user, {
  [setUser]: (_, {payload}) => payload
})

const userInfoReducer = createReducer(initState.userInfo, {
  [setUserInfo]: (_, {payload}) => payload
})

const reducer = combineReducers({
  globalParameters: globalParametersReducer,
  user: userReducer,
  userInfo: userInfoReducer,
})

export default reducer
