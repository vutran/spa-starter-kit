// Import modules
import React, { Component } from 'react'
import { Provider } from 'react-redux'

// Import components/containers
import App from './App'
import DevTools from './DevTools'

export default class Root extends Component {
  render() {
    const { store } = this.props
    return (
      <Provider store={store}>
        <div>
          <App />
          <DevTools />
        </div>
      </Provider>
    )
  }
}
