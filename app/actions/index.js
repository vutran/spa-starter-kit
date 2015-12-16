/**
 * Action Types
 */

export const ADD_TODO = 'ADD_TODO'

/**
 * Action Creators
 */

export function addTodo(name) {
  return { type: ADD_TODO, name }
}
