import { combineReducers } from 'redux'

// Import all reducers
import data from './data'

// Combine all reducers
const rootReducer = combineReducers({
  data
})

export default rootReducer
