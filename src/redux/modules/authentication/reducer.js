import actions from './actions'

const initialState = {
  authenticated: false,   
}

export default function(state = initialState, action) {

  switch (action.type) {

    case actions.SET_AUTHENTICATED:      
      return {
        ...state,
        authenticated: action.authenticated
      }
            
    default:
      return state
  }
}