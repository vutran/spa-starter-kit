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
