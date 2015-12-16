// Import action types
import { ADD_TODO } from '../actions/index'

// The initial state
const intialState = [
  { name: 'Learn ReactJS' },
  { name: 'Research Flux and Redux' }
]

/**
 * This is the reducer function for the "data" property in our application's state tree
 *
 * @param array state           An array of todo items
 * @param object action         The action that is to be performed
 * @return array
 */
export default function data(state = intialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        { name: action.name }
      ]
    default:
      return state
  }
}
