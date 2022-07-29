const URL = 'https://azapp-playground-demo-api.azurewebsites.net/api'

export const getGlobalParameters = () => {
  return fetch(`${URL}/GlobalParameters/GetAllDynamic`).then((res) =>
    res.json()
  )
}

export const getLabels = (defaultLanguageID) => {
  return fetch(
    `${URL}/Labels/GetAllDynamic?Select=labelKey,title&&languageID='${defaultLanguageID}'`
  ).then((res) => res.json())
}

export const generatePassword = (data) => {
  return fetch(`${URL}/Accounts/GeneratePassword`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then((res) => res.json())
}

export const loginWithCode = (data) => {
  return fetch(`${URL}/Accounts/LoginWithCOde`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then((res) => res.json())
}

export const refreshToken = (data) => {
  return fetch(`${URL}/Accounts/RefreshToken`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => res.json())
}

export const logoutUser = (token) => {
  return fetch(`${URL}/Accounts/Logout`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      Authorization: `Bearer ${token}`
    }
  }).then(res => res.json())
}

export const getCurrentAppUser = (token) => {
  return fetch(`${URL}/Accounts/GetCurrentAppUser`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((res) => res.json())
}

export const getUserCrmProfileWorklogs = (token) => {
  return fetch(`${URL}/UserCrmProfileWorklogs/GetAllDynamic`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((res) => res.json())
}

export const patchUserCrmProfile = ({ token, path, value, userId }) => {
  console.log(value)
  return fetch(`${URL}/UserCrmProfiles/Patch/${userId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify([{ path, value }])
  }).then((res) => res.json())
}

export const createUserCrmProfileWorklogs = ({
  token,
  dayOfWeek,
  fromTime,
  toTime,
  userCrmProfileID
}) => {
  return fetch(`${URL}/UserCrmProfileWorklogs/Create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      userCrmProfileID,
      dayOfWeek,
      fromTime,
      toTime,
    })
  }).then((res) => res.json())
}

export const deteleUserCrmProfileWorklogs = ({id, token}) => {
  return fetch(`${URL}/UserCrmProfileWorklogs/Delete/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    }
  }).then((res) => res.json())
}

export const patchUserCrmProfileWorklogs = ({ token, path, value, id }) => {
  return fetch(`${URL}/UserCrmProfileWorklogs/Patch/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify([{ path, value}])
  }).then((res) => res.json())
}

