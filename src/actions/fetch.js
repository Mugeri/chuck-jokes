import config from '../config';

export const fetchCategoryFailure = error => ({
  type: 'FETCH_CATEGORY_FAILURE',
  error,
});

export const fetchCategorySuccess = results => ({
  type: 'FETCH_CATEGORY_SUCCESS',
  payload: results,
});

export const fetchContentFailure = error => ({
  type: 'FETCH_CONTENT_FAILURE',
  error,
});

export const fetchContentRequest = () => ({ type: 'FETCH_CONTENT_REQUEST' });

export const fetchContentSuccess = (content, index) => ({
  type: 'FETCH_CONTENT_SUCCESS',
  payload: content,
  index,
});

export function fetchCategories() {
  return (dispatch) => {
    const url = `${config.apiURL}/categories`;
    return fetch(url)
      .then(response => response.json())
      .then(categories => dispatch(fetchCategorySuccess(categories)))
      .catch(error => dispatch(fetchCategoryFailure(error)));
  };
}

export function fetchContent(category, index) {
  return (dispatch) => {
    dispatch(fetchContentRequest());
    const url = `${config.apiURL}/random?category=${category}`;
    return fetch(url)
      .then(response => response.json())
      .then(content => dispatch(fetchContentSuccess(content, index)))
      .catch(error => dispatch(fetchContentFailure(error)));
  };
}
