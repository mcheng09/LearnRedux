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

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
  type: 'CHANGE_TO_DO',
  searchToDo: 'work'
})

console.log('should be "work"', store.getState());
