import {
  createStore,
  applyMiddleware
} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import mainReducer from 'core/main/reducer'

const store = createStore(
  mainReducer,
  undefined,
  applyMiddleware(thunk, logger)
)

export default store
