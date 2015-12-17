// Import modules
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

// Import react-todo
import { Root, configureStore, rootReducer } from 'react-todo'

// Import store
const store = configureStore()

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('app')
)
