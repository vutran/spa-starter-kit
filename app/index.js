// Import modules
import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// Import redux devtools components
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

// Load components
import App from './components/App';

// Import reducers
import rootReducer from './reducers/index';

// Compose the store function
const finalCreateStore = compose(
    // Provides support for DevTools:
    devTools(),
    // Lets you write ?debug_session=<name> in address bar to persist debug sessions
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

// Create the store
let store = finalCreateStore(rootReducer);

ReactDOM.render(
    <div>
        <Provider store={store}>
            <App />
        </Provider>
        <DebugPanel top right bottom>
          <DevTools store={store} monitor={LogMonitor} />
        </DebugPanel>
    </div>,
    document.getElementById('app')
);
