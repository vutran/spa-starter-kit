Single Page Application (SPA) Starter Kit (NodeJS, React, webpack, babel/ES2015, Redux, Hot Loader)
=====

Quick starter kit for booting up a NodeJS container with React, webpack, babel/ES2015, Redux, and more.

# Features

- [Docker Node](https://hub.docker.com/_/node/)
- [webpack](webpack.github.io)
- [ReactJS](http://facebook.github.io/react/)
- [Babel (ES2015)](https://babeljs.io/)
- [Sass](http://sass-lang.com/)
- [PostCSS](https://github.com/postcss/postcss)
 - [Autoprefixer](https://github.com/postcss/autoprefixer)
- [ES Lint](http://eslint.org/)
- [Redux](http://rackt.github.io/redux/)
- [Redux DevTools](https://github.com/gaearon/redux-devtools)
- [React Hot Loader](http://gaearon.github.io/react-hot-loader/)

# Up and Running with Docker

## Update your `/etc/hosts` file

You need to add `dockerhost` to your hosts file and point that to your Docker host.

## Run with Docker Compose

You can simply boot up the Docker container by running `docker-compose up`. This will automatically download the required Docker images, and run through and install the required npm depedencies for your project, start the webpack bundler and the server.

## Access the URL

The application will be accessible at [http://dockerhost:4000/](http://dockerhost:4000/).

# React Components

React components should be created and placed inside of the `/app/components/` directory. Below is a sample React component in ES6.

For more information, please read the [React docs](http://facebook.github.io/react/docs/), or [ES6](https://babeljs.io/docs/learn-es2015/).

````
import { Component } from 'react'

export default class MyComponent extends Component {
    render() {
        return <p>Hello, world!</p>
    }
}
````

### Importing a React Component

To render a React component, you will need to import the component before calling [`React.render()`](http://facebook.github.io/react/docs/top-level-api.html#react.render)

````
import ReactDOM from 'react-dom'
import MyComponent from './component/MyComponent'

// Render the component
ReactDOM.render(
  <MyComponent />,
  document.getElementbyId('app')
)
````

# Redux Implementation

### Actions and Action Creators

You can place all your action types and action creator functions in the `app/actions/index.js` file.

### Reducers

Reducer functions should be stored in the `app/reducers/` directory. Once your reducer is created, you can combine them with the root reducer that is found in the `app/reducers/index.js` file.

# TODOs

- Refactor components to more reusable (container components)
- Improve on the Redux implementation
