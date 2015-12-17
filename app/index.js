import React from 'react'
import ReactDOM from 'react-dom'

// Import the app boilerplate
import { Root, configureStore, rootReduce } from 'react-todo'

// Create the store
const store = configureStore()

// Render to the #app element
ReactDOM.render(
  <Root store={store} />,
  document.getElementById('app')
)
