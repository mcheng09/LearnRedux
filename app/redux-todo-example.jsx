var redux = require('redux');

console.log('Challenge Accepted!')

var stateDefault = {
  searchToDo: '',
  showCompleted: false,
  todos: []
};

var reducer = (state = stateDefault, action) => {

  switch(action.type) {
    case 'CHANGE_TO_DO':
      return {
        ...state,
        searchToDo: action.searchToDo
      };
    default:
      return state;
  }
};

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('My To Do', state.searchToDo);
  document.getElementById('app').innerHTML = state.searchToDo
});

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
  type: 'CHANGE_TO_DO',
  searchToDo: 'work'
});

store.dispatch({
  type: 'CHANGE_TO_DO',
  searchToDo: 'dog'
});

console.log('should be "work"', store.getState());
