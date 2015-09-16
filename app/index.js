// Import modules
import React from 'react';

// Load components
import HelloWorld from './components/HelloWorld.js';

// Load the stylesheets
import './styles/global.scss';

React.render(
    <HelloWorld />,
    document.getElementById('content')
);
