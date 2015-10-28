import React, { Component, PropTypes } from 'react';

// Import components
import TodoItem from './TodoItem';
import TodoAddForm from './TodoAddForm';

// Import styles
import styles from '../styles/todo.scss';

/**
 * <TodoList />
 */
export default class TodoList extends Component {
    render() {
        return (
            <div>
                <ol className={styles.todoList}>
                    {this.getTodoItemNodes()}
                </ol>
                <TodoAddForm onAddTodo={this.handleAddTodo.bind(this)} />
            </div>
        );
    }

    /**
     * Handles the onAddTodo prop callback
     *
     * @param string name
     * @return void
     */
    handleAddTodo(name) {
        // Pass it up the tree
        this.props.onAddTodo(name);
    }

    /**
     * Retrieve the item nodes as a string
     *
     * @return string
     */
    getTodoItemNodes() {
        const nodes = this.props.data.map(function(item, key) {
            return (
                <TodoItem key={key}>{item.name}</TodoItem>
            );
        });
        return nodes;
    }
}

// Define the prop types
TodoList.propTypes = {
    onAddTodo : PropTypes.func.isRequired
};
