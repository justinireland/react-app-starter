export const actions = {  
  REQ_LOGIN: 'REQ_LOGIN',
  REQ_LOGOUT: 'REQ_LOGOUT',
  SET_AUTHENTICATED: 'SET_AUTHENTICATED',  
}

export const reqLogin = () => ({ type: actions.REQ_LOGIN })
export const reqLogout = () => ({ type: actions.REQ_LOGOUT })
export const setAuthenticated = authenticated => ({ type: actions.SET_AUTHENTICATED, authenticated })

export default actions