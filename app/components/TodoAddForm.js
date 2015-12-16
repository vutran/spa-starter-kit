import React, { Component, PropTypes } from 'react'

// Import styles
import styles from '../styles/todo.scss'

/**
 * <TodoAddForm />
 */
export default class TodoAddForm extends Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input className={styles.todoField} type="text" placeholder="Enter a task..." ref="todoField" />
        <button className={styles.todoBtn} type="button">Add</button>
      </form>
    )
  }

  /**
   * Handles the form submit
   *
   * @param Event e
   * @return void
   */
  handleSubmit(e) {
    e.preventDefault()
    const name = this.refs.todoField.value
    // Calls the prop function and pass the action
    this.props.onAddTodo(name)
    // Reset the field
    this.refs.todoField.value = ''
  }
}

// Define the prop types
TodoAddForm.propTypes = {
  onAddTodo : PropTypes.func.isRequired
}
