SPA Starter Kit (NodeJS, React, webpack)
=====

Quick starter kit for booting up a NodeJS container with React, webpack.

# Features

- NodeJS (Docker image)
- webpack
- ReactJS

# Up and Running with Docker Compose

````
docker-compose up
````

# React Components

React components should be created and placed inside of the `/app/components/` directory. Below is a sample React component in ES6.

For more information, please read the [React docs](http://facebook.github.io/react/docs/), or [ES6](https://babeljs.io/docs/learn-es2015/).

````
import React from 'react';

/**
 * <HelloWorld />
 */
class HelloWorld extends React.Component {
    /**
     * Constructor
     */
    constructor(props) {
        super(props);
    }

    /**
     * Renders the component
     */
    render() {
        return <p>Hello, world!</p>;
    }
}

// Export the module
module.exports = HelloWorld;
````

### Importing a React component

To render a React component, you will need to import the component before calling [`React.render()`](http://facebook.github.io/react/docs/top-level-api.html#react.render)

````
// Load components
import HelloWorld from './components/HelloWorld.js';

// Render the component
React.render(<HelloWorld />, mountNode);
````

# TODO

- Add React Hot Loader
- Add html-loader
