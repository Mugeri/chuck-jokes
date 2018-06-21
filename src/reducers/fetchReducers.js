export default (state = {}, action) => {
 switch (action.type) {
  case 'FETCH_SUCCESS':
    console.log(action);
   return {
    result: action.payload
   }
  default:
   return state
 }
}
