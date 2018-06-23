export function fetch(state = {}, action) {
  switch (action.type) {
    case 'FETCH_CONTENT_REQUEST':
      return Object.assign({}, state, { isLoading: true });

    case 'FETCH_CATEGORY_SUCCESS':
      return Object.assign({}, state, { categories: action.payload, isLoading: false });

    case 'FETCH_CATEGORY_FAILURE':
      return Object.assign({}, state, { error: action.error, isLoading: false });

    case 'FETCH_CONTENT_SUCCESS':
      return Object.assign({}, state, { content: action.payload, index: action.index, isLoading: false });

    case 'FETCH_CONTENT_FAILURE':
      return Object.assign({}, state, { error: action.error, isLoading: false });

    default:
      return state;
  }
}
