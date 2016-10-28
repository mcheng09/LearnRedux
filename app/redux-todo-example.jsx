var redux = require('redux');

console.log('Challenge Accepted!')

var stateDefault = {
  searchToDo: '',
  showCompleted: false,
  todos: []
};

var reducer = (state = stateDefault, action) => {
  return state;
};

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState', currentState);
