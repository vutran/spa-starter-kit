// Import modules
import React, { Component } from 'react'
import { Provider } from 'react-redux'

// Import components/containers
import App from './App'

export default class Root extends Component {
  render() {
    const { store } = this.props
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}
