import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { connectRouter } from 'connected-react-router'
import { fork } from 'redux-saga/effects'
import { Authentication, authenticationSagas } from './authentication'

const persistConfig = {
  key: 'root',
  storage,  
}

export const createRootReducer = history => 
  combineReducers({ 
    router: connectRouter(history),
    persisted: persistReducer(persistConfig, Authentication /* Add persisted reducers here */),
    Authentication, /* Add all reducers here */
  })

export function* rootSaga () {    
  yield fork(authenticationSagas)  
}