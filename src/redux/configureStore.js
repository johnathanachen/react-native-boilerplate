import { createStore, applyMiddleware } from 'redux'
import myReducer from './reducers'
import thunk from 'redux-thunk'

export default function configureStore() {
  let store = createStore(myReducer, applyMiddleware(thunk))
  return store
}