var redux = require('redux');

console.log('Starting redux example');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();
// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('New state', store.getState());

  if(state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...';
  }
  else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View Your Location</a>'
  }
});

// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Mike'));
store.dispatch(actions.addHobby('Jogging'));
store.dispatch(actions.addHobby('Skipping'));
store.dispatch(actions.removeHobby(2));
store.dispatch(actions.addMovie('Inception', 'Action'));
store.dispatch(actions.addMovie('Ouiji', 'Horror'));
store.dispatch(actions.removeMovie(1));
store.dispatch(actions.changeName('Emily'));
