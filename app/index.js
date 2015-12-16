// Import modules
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

// Import	components/containers
import Root from './containers/Root'

// Import stores/reducers
import configureStore from './store/configure'
import rootReducer from './reducers/index'

// Create the store
const store = configureStore()

ReactDOM.render(
  <Root store={store} />,
	document.getElementById('app')
)
