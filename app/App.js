import React from 'react';

/**
 * <App />
 */
export default class App extends React.Component {
    /**
     * Renders the component
     */
    render() {
        return (
            <div className="intro">
                <h1>Congratulations!</h1>
                <p>You are now ready to begin your new ReactJS application.</p>
                <p>To get started, visit the <a href="http://facebook.github.io/react/" target="_blank">ReactJS</a> website.</p>
                <h2 className="footnote">Got a feedback or suggestion to this starter kit? <a href="https://github.com/vutran/spa-starter-kit/issues" target="_blank">Post on GitHub.</a></h2>
            </div>
        );
    }
}
