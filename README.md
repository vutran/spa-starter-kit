SPA Starter Kit (NodeJS, React, webpack, babel/ES6, Redux)
=====

Quick starter kit for booting up a NodeJS container with React, webpack.

# Features

- [Docker Node](https://hub.docker.com/_/node/)
- [webpack](webpack.github.io)
- [ReactJS](http://facebook.github.io/react/)
- [Babel (ES/2015)](https://babeljs.io/)
- [Sass](http://sass-lang.com/)
- [PostCSS](https://github.com/postcss/postcss)
 - [Autoprefixer](https://github.com/postcss/autoprefixer)
- [ES Lint](http://eslint.org/)
- [Redux](http://rackt.github.io/redux/)
- [React Hot Loader](http://gaearon.github.io/react-hot-loader/)

# Up and Running with Docker

## Update your `/etc/hosts` file

You need to add `dockerhost` to your hosts file and point that to your Docker host.

## Run with Docker Compose

You can simply boot up the Docker container by running `docker-compose up`. This will automatically download the required Docker images, and run through and install the required npm depedencies for your project, start the webpack bundler and the server.

## Access the URL

The application will be accessible at [http://dockerhost:4001/](http://dockerhost:4001/).

# React Components

React components should be created and placed inside of the `/app/components/` directory. Below is a sample React component in ES6.

For more information, please read the [React docs](http://facebook.github.io/react/docs/), or [ES6](https://babeljs.io/docs/learn-es2015/).

````
import React from 'react';

/**
 * <App />
 */
export default class App extends React.Component {
    /**
     * Renders the component
     */
    render() {
        return <p>Hello, world!</p>;
    }
}
````

### Importing a React Component

To render a React component, you will need to import the component before calling [`React.render()`](http://facebook.github.io/react/docs/top-level-api.html#react.render)

````
// Load components
import App from './components/App.js';

// Render the component
React.render(<App />, mountNode);
````
