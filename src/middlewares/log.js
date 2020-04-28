export default dispatch => next => action => {
  console.log(`action: ${action.type}`, action);

  next(action);
}