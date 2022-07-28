import { createAction } from "@reduxjs/toolkit";

export const setGlobalParameters = createAction('globalParameters/set')

export const setUser = createAction('user/set')

export const setUserInfo = createAction('userInfo/set')

export const changeUserInfo = createAction('userInfo/change')

export const setLabels = createAction('labels/set')

export const setWorklogs = createAction('worklogs/set')

export const deleteWorklogs = createAction('worklogs/delete')

export const changeWorklogs = createAction('worklogs/change')

export const addWorklog = createAction('worklogs/add')