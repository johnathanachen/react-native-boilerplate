import { FETCHING_PEOPLE, FETCHING_PEOPLE_SUCCESS } from '../constants'

const initialState = {
  people: [],
  isFetching: false,
  error: false
}

export default function dataReducer (state = initialState, action) {
  switch (action.type) {
    case FETCHING_PEOPLE:
      return {
        ...state,
        people: [],
        isFetching: true
      }
    case FETCHING_PEOPLE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        people: action.data
      }
    default:
      return state
  }
}