import config from '../config';

export function fetchSuccess(results) {
  return {
    type: 'FETCH_SUCCESS',
    results,
  }
}

export function fetchFailure(error) {
  return {
    type: 'FETCH_SUCCESS',
    error,
  }
}
export function fetchCategories() {
  console.log('I AM ALSO CALLED');
  const url = config.apiURL;
  console.log(process.env.REACT_APP_CHUCK_API_URL);

  return dispatch => {
    console.log('AND NOW?');
    // const url = config.apiURL;
    // return {
    //   fetch(url)
    //   .then((response) => response.json)
    //   .then((categories) => dispatch(fetchSuccess(categories)))
    //   .catch((error) => dispatch(fetchFailure(error)));
    // };
  }
}
