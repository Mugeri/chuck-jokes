export function fetch(state = {}, action) {
  switch (action.type) {
    case 'FETCH_CATEGORY_SUCCESS':
      return Object.assign({}, state, { categories: action.payload });

    case 'FETCH_CATEGORY_FAILURE':
      return Object.assign({}, state, { error: action.error });

    case 'FETCH_CONTENT_SUCCESS':
      return Object.assign({}, state, { content: action.payload });

    case 'FETCH_CONTENT_FAILURE':
      return Object.assign({}, state, { error: action.error });

    default:
      return state
    }
  }
