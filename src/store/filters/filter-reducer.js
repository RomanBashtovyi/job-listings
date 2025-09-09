import { ADD_FILTER, REMOVE_FILTER, CLEAR_FILTERS } from './filter-action'

export const filterReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FILTER:
      return [...state, action.filter]
    case REMOVE_FILTER:
      return state.filter(filter => filter !== action.filter)
    case CLEAR_FILTERS:
      return []
    default:
      return state
  }
}