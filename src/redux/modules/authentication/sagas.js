import { call, fork, put, select, takeLatest } from 'redux-saga/effects'
import actions, { setAuthenticated } from './actions'

function* reqLoginSaga() {  
  yield put(setAuthenticated(true)) 
}
function* reqLogoutSaga() {      
  yield put(setAuthenticated(false)) 
}
function* watchReqLoginSaga() {  
  yield takeLatest(actions.REQ_LOGIN, reqLoginSaga)  
}
function* watchReqLogoutSaga() {  
  yield takeLatest(actions.REQ_LOGOUT, reqLogoutSaga)  
}

export default function* authenticationSagas() {    
  yield fork(watchReqLoginSaga)
  yield fork(watchReqLogoutSaga)    
}