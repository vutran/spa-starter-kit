import React, { Component, PropTypes } from 'react'

// Import components
import TodoItem from './TodoItem'

// Import styles
import styles from '../styles/todo.scss'

/**
 * <TodoList />
 */
export default class TodoList extends Component {
  render() {
    return (
      <ol className={styles.todoList}>
        {this.getTodoItemNodes()}
      </ol>
    )
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
      )
    })
    return nodes
  }
}
