import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore , combineReducers} from 'redux'
import { default as anecdoteReducer } from './reducers/anecdoteReducer'
import { default as notificationReducer } from './reducers/notificationReducer'
import { default as filterReducer } from './reducers/filterReducer'

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notification: notificationReducer,
  filter: filterReducer,
})

const store = createStore(reducer, composeWithDevTools())

export default store
