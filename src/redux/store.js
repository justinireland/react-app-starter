import { createBrowserHistory } from 'history'
import { applyMiddleware, createStore, compose } from 'redux'
import { persistStore } from 'redux-persist'
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'
import { createRootReducer, rootSaga } from './modules'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const history = createBrowserHistory()

export const store =  createStore(
  createRootReducer(history),  
  composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
)
export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)