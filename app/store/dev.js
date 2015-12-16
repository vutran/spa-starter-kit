import { createStore, applyMiddleware, compose } from 'redux'
import { persistState } from 'redux-devtools'
import rootReducer from '../reducers/index'
import DevTools from '../containers/DevTools'

const finalCreateStore = compose(
  // Enable Redux DevTools
  DevTools.instrument(),
  // Optional. Lets you write ?debug_session=<key> in address bar to persist debug sessions
  persistState(getDebugSessionKey())
)(createStore)

function getDebugSessionKey() {
  // You can write custom logic here!
  // By default we try to read the key from ?debug_session=<key> in the address bar
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/)
  return (matches && matches.length > 0)? matches[1] : null
}

export default function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState)
}
