import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { PersistGate } from 'redux-persist/integration/react'
import { history, persistor, store } from './redux'
import App from './App'
import './index.css'

ReactDOM.render(
  <PersistGate loading={null} persistor={persistor}>
    <Provider store={store}>     
      <ConnectedRouter history={history}>            
        <App />              
      </ConnectedRouter>       
    </Provider>
  </PersistGate>,
  document.getElementById('root')
)
