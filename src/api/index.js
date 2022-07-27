const URL = 'https://azapp-playground-demo-api.azurewebsites.net/api'

export const getGlobalParameters = () => {
  return fetch(`${URL}/GlobalParameters/GetAllDynamic`).then((res) =>
    res.json()
  )
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

export const loginWithCode= (data) => {
  return fetch(`${URL}/Accounts/LoginWithCOde`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then((res) => res.json())
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

export const patchUserCrmProfile = (data) => {
  return fetch(`${URL}/UserCrmProfiles/Patch/${data.userId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${data.token}`
    },
    body: JSON.stringify([{ path: data.path, value: data.value }])
  }).then((res) => res.json())
}
