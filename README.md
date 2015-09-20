SPA Starter Kit (NodeJS, React, webpack, babel/ES6, Redux)
=====

Quick starter kit for booting up a NodeJS container with React, webpack.

# Features

- NodeJS (Docker image)
- webpack
- ReactJS
- Babel, ES6/2015
- Sass
- PostCSS
 - Autoprefixer
- ES Lint
- Redux

# Up and Running with Docker Compose

You can simply boot up the Docker container by running `docker-compose up`. This will automatically download the required Docker images, and run through and install the required npm depedencies for your project, start the webpack bundler and the server.

# React Components

React components should be created and placed inside of the `/app/components/` directory. Below is a sample React component in ES6.

For more information, please read the [React docs](http://facebook.github.io/react/docs/), or [ES6](https://babeljs.io/docs/learn-es2015/).

````
import React from 'react';

/**
 * <HelloWorld />
 */
export default class HelloWorld extends React.Component {
    /**
     * Renders the component
     */
    render() {
        return <p>Hello, world!</p>;
    }
}
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
- Move npm, and webpack into the Docker container
