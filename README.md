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
- [Hot Reload Server](https://github.com/vutran/hot-reload-server)
- [dotenv](https://github.com/motdotla/dotenv)

# Quickstart Guide

Clone the repository.

`git clone git@github.com:vutran/spa-starter-kit.git`

Switch to project directory.

`cd spa-starter-kit`

Boot up with Docker.

`docker-compose up`

Open the URL in your browser.

***Note: You need to add `dockerhost` to your `/etc/hosts` file and point that to your Docker machine's address.***

[http://dockerhost:4000](http://dockerhost:4000)

# Environmental Variables

You can manage your environmental variables via the `.env` file.

````
NODE_ENV=development
DOCKER_HOST=192.168.99.100
````

# React Components

React components should be created and placed inside of the `/app/components/` directory. Below is a sample React component in ES6.

For more information, please read the [React docs](http://facebook.github.io/react/docs/), or [ES6](https://babeljs.io/docs/learn-es2015/).

````javascript
import { Component } from 'react'

export default class MyComponent extends Component {
    render() {
        return <p>Hello, world!</p>
    }
}
````

### Importing a React Component

To render a React component, you will need to import the component before calling [`React.render()`](http://facebook.github.io/react/docs/top-level-api.html#react.render)

````javascript
import ReactDOM from 'react-dom'
import MyComponent from './component/MyComponent'

// Render the component
ReactDOM.render(
  <MyComponent />,
  document.getElementbyId('app')
)
````

# Redux Implementation

For more information, please refer to the [demo application boilerplate](https://github.com/vutran/react-todo).

### Actions and Action Creators

You can place all your Action Types and Action Creators in the `app/actions/index.js` file.

### Reducers

Reducer functions should be stored in the `app/reducers/` directory. Once your reducer is created, you can combine them with the root reducer that is found in the `app/reducers/index.js` file.
